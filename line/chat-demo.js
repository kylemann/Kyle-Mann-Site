/* Port of the Line deck's chat demo (presentations/js/our-deck-chat-demo.js): same scenarios and
   timings, rendered into .lv-product .chat[data-chat-scroll]. Runs only while the figure is in view. */
(function () {
  var IMG = 'line/img/';
  var scenarios = [
    [
      { role: 'property', text: "Thanks for reaching out to Hotel Ada Events. We'd love to host your wedding weekend. Are you planning ceremony and reception at one property?" },
      { role: 'guest', text: 'Yes, ideally both onsite. We are targeting May 18, 2027 and around 120 guests.' },
      { role: 'property', text: 'Beautiful. Do you prefer an outdoor ceremony with an indoor dinner and dancing afterward?' },
      { role: 'guest', text: 'Exactly. We want a smooth guest flow, cocktail hour outside, then dinner inside.' },
      { role: 'property', text: 'Perfect, these layouts usually work best for that flow.' },
      { role: 'property', images: ['lavilla-22.jpg', 'lavilla-15.jpg', 'lavilla-3.jpg'] },
      { role: 'guest', text: 'Looks great. Can we also reserve a room block for family and wedding party?' },
      { role: 'property', text: 'Absolutely. Here are room types most couples choose for multi-night stays.' },
      { role: 'property', images: ['lavilla-23.jpg', 'lavilla-24.jpg', 'lavilla-3.jpg'] },
      { role: 'property', text: 'For this date, the F&B minimum is $12,000 and guest room rates start at $289. Would you like me to place a 48-hour soft hold on your date?' },
      { role: 'guest', text: 'Yes please. We can tour next week if you have availability.' },
      { role: 'property', text: "Done. I'll send tour times, sample timeline, and a full summary to Whitney on our events team." }
    ],
    [
      { role: 'property', text: "Thanks for contacting Hotel Ada Events. Happy to help. Is this an internal leadership offsite or a client-facing program?" },
      { role: 'guest', text: 'Internal offsite. Around 85 attendees in October, likely two-day programming.' },
      { role: 'property', text: 'Great. Should we plan one main plenary room plus two breakouts, with built-in AV and catering service?' },
      { role: 'guest', text: 'Yes, and we want a casual reception immediately after sessions on day one.' },
      { role: 'property', text: 'Excellent, these room combinations are typically the strongest fit.' },
      { role: 'property', images: ['lavilla-15.jpg', 'lavilla-23.jpg', 'lavilla-24.jpg'] },
      { role: 'guest', text: 'If most attendees stay overnight, can you support room blocks at that volume?' },
      { role: 'property', text: 'Yes. These room categories are what we normally allocate for groups this size.' },
      { role: 'property', images: ['lavilla-3.jpg', 'lavilla-22.jpg', 'lavilla-15.jpg'] },
      { role: 'property', text: 'For this setup, the F&B minimum is $9,500 and guest room rates start at $239. Would you like a draft proposal with menu options included?' },
      { role: 'guest', text: 'Yes, please. We also want to walk the meeting floor before final signoff.' },
      { role: 'property', text: "Perfect. I'll share proposal details and available walkthrough windows this afternoon." }
    ],
    [
      { role: 'property', text: "Thanks for contacting Hotel Ada. We'd love to host your company meetup. Can you share your ideal format for the day?" },
      { role: 'guest', text: 'We are planning a 60-person meetup with short talks, team breakouts, and open networking.' },
      { role: 'property', text: 'Great setup. Do you prefer lounge-style seating with flexible furniture and station-based catering?' },
      { role: 'guest', text: 'Yes, exactly. We want it to feel social, not like a formal conference.' },
      { role: 'property', text: 'Great direction. These spaces are usually the best match for that experience.' },
      { role: 'property', images: ['lavilla-22.jpg', 'lavilla-23.jpg', 'lavilla-15.jpg'] },
      { role: 'guest', text: 'Some attendees are flying in. Can we include overnight rooms in the same booking?' },
      { role: 'property', text: 'Absolutely. These are the room options most teams bundle with meetup packages.' },
      { role: 'property', images: ['lavilla-23.jpg', 'lavilla-15.jpg', 'lavilla-24.jpg'] },
      { role: 'property', text: 'For this format, the F&B minimum is $6,500 and guest room rates start at $219. Should I prepare two package options for your team?' },
      { role: 'guest', text: 'Yes, that would help. Can we review this week with our operations lead?' },
      { role: 'property', text: "Absolutely. I'll share suggested times and send a complete summary with next steps." }
    ]
  ];

  var STEP_MS = 1180, MAX_VISIBLE_ROWS = 8, REMOVE_DELAY_MS = 380;

  function setup(scrollArea) {
    var scenarioIndex = Math.floor(Math.random() * scenarios.length), messageIndex = 0, timer = null;

    function createRow(entry) {
      var row = document.createElement('div');
      row.className = 'msg msg--' + entry.role;
      var bubble = document.createElement('div');
      bubble.className = 'bubble';
      if (entry.text) bubble.textContent = entry.text;
      if (entry.images) {
        bubble.classList.add('bubble--gallery');
        var thumbs = document.createElement('div');
        thumbs.className = 'thumbs';
        entry.images.forEach(function (src, i) {
          var img = document.createElement('img');
          img.src = IMG + src; img.alt = 'Gallery preview ' + (i + 1);
          thumbs.appendChild(img);
        });
        bubble.appendChild(thumbs);
      }
      row.appendChild(bubble);
      return row;
    }
    function pullNextEntry() {
      var scenario = scenarios[scenarioIndex], entry = scenario[messageIndex];
      messageIndex += 1;
      if (messageIndex >= scenario.length) { scenarioIndex = (scenarioIndex + 1) % scenarios.length; messageIndex = 0; }
      return entry;
    }
    function addMessage(instant) {
      var row = createRow(pullNextEntry());
      scrollArea.appendChild(row);
      if (instant) { row.classList.add('is-visible'); }
      else { void row.offsetHeight; setTimeout(function () { row.classList.add('is-visible'); }, 30); }
      var rows = scrollArea.querySelectorAll('.msg');
      // Hard cap if a throttled tab let exits fall behind.
      while (rows.length > MAX_VISIBLE_ROWS + 2) { scrollArea.removeChild(rows[0]); rows = scrollArea.querySelectorAll('.msg'); }
      if (rows.length > MAX_VISIBLE_ROWS) {
        var oldest = rows[0];
        oldest.classList.add('is-exit'); oldest.classList.remove('is-visible');
        setTimeout(function () { if (oldest.parentNode === scrollArea) scrollArea.removeChild(oldest); }, REMOVE_DELAY_MS);
      }
      scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: instant ? 'auto' : 'smooth' });
    }
    function start() {
      if (timer) return;
      scrollArea.innerHTML = '';
      addMessage(true); addMessage(true); addMessage(true);
      timer = setInterval(function () { addMessage(false); }, STEP_MS);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    // Run only while the figure is on screen and the tab is visible (background tabs pause timers
    // and would otherwise pile up rows to reveal all at once).
    var inView = !('IntersectionObserver' in window);
    function sync() { if (inView && !document.hidden) start(); else stop(); }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { inView = e.isIntersecting; });
        sync();
      }, { threshold: 0.1 }).observe(scrollArea);
    }
    document.addEventListener('visibilitychange', sync);
    sync();
  }

  var areas = document.querySelectorAll('.lv-product .chat[data-chat-scroll]');
  for (var i = 0; i < areas.length; i++) setup(areas[i]);
})();
