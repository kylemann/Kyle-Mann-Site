#!/usr/bin/env bash
# Deploy the site to S3 without listing the whole bucket.
#
# The bucket also holds ~1M legacy S3 access-log objects under root/ (2018-2023).
# A plain `aws s3 sync . s3://bucket --delete` has to page through all of them on
# every deploy, which takes 10+ minutes. So instead:
#   1. sync each top-level folder by prefix (S3 lists only that prefix)
#   2. upload root-level files individually
#   3. remove root-level objects that no longer exist in the repo
#
# Usage: BUCKET=kyle-mann.com [DRY_RUN=1] bash .github/scripts/deploy.sh
set -euo pipefail
BUCKET="${BUCKET:?set BUCKET}"
DRY="${DRY_RUN:+--dryrun}"
EXCLUDES=(--exclude "*.DS_Store" --exclude "*.scss" --exclude "*.map")

for dir in */; do
  d="${dir%/}"
  case "$d" in root) continue;; esac
  echo "== sync $d/"
  aws s3 sync "$d" "s3://$BUCKET/$d" --delete "${EXCLUDES[@]}" $DRY
done

echo "== root-level files"
for f in *; do
  [ -f "$f" ] || continue
  case "$f" in *.DS_Store|*.scss|*.map) continue;; esac
  aws s3 cp "$f" "s3://$BUCKET/$f" $DRY
done

echo "== root-level objects no longer in repo"
aws s3api list-objects-v2 --bucket "$BUCKET" --delimiter / --query 'Contents[].Key' --output text \
  | tr '\t' '\n' | grep -v '^None$' | while IFS= read -r key; do
  [ -n "$key" ] || continue
  case "$key" in *.scss|*.map) continue;; esac
  if [ ! -f "$key" ]; then
    echo "delete: s3://$BUCKET/$key"
    [ -n "$DRY" ] || aws s3 rm "s3://$BUCKET/$key"
  fi
done
echo "== done"
