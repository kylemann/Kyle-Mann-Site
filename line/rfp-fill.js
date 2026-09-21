// Port of the Line deck's customer/overview-rfp-fill.js: the RFP form types itself in,
// sends, shows the "Thank you" beat, resets, and loops. Same steps and timings as the deck.
// Here it runs while the form is on screen instead of while its slide is active.
(function () {
  function init() {
    var containers = document.querySelectorAll('[data-rfp-form]');
    Array.prototype.forEach.call(containers, function (container) {
      var isActive = false;
      var start = function () { if (isActive) return; isActive = true; resetForm(container); runCycle(container, function () { return isActive; }); };
      var stop = function () { isActive = false; resetForm(container); };
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) start(); else stop(); });
        }, { threshold: 0.25 });
        io.observe(container);
      } else {
        start();
      }
    });
  }

  function safeTimeout(fn, ms, isAlive) { return setTimeout(function () { if (isAlive()) fn(); }, ms); }

  function runCycle(container, isAlive) {
    if (!isAlive()) return;
    runFill(container, isAlive, function () {
      if (!isAlive()) return;
      // Brief beat after Send activates, then swap to the Thank-you punchline.
      safeTimeout(function () {
        if (!isAlive()) return;
        showThanks(container);
        // Hold the thanks message, then reset and loop.
        safeTimeout(function () {
          if (!isAlive()) return;
          resetForm(container);
          safeTimeout(function () { runCycle(container, isAlive); }, 1400, isAlive);
        }, 3800, isAlive);
      }, 700, isAlive);
    });
  }

  function showThanks(container) {
    var demo = container.querySelector('.rfp-form-demo');
    if (demo) demo.classList.add('is-thanks');
  }

  function runFill(container, isAlive, onDone) {
    var steps = [
      function (next) { check(container, 'check-meeting', next, 520); },
      function (next) { check(container, 'check-rooms', next, 540); },
      function (next) { typeIn(container, 'start', '10/15/2026', isAlive, next); },
      function (next) { typeIn(container, 'end', '10/17/2026', isAlive, next); },
      function (next) { typeIn(container, 'name', 'Q4 Leadership Offsite', isAlive, next); },
      function (next) { selectOption(container, 'type', 'Corporate Meeting', next, 720); },
      function (next) { typeIn(container, 'attendees', '60', isAlive, next); },
      function (next) { activateSend(container, next, 700); }
    ];
    var runStep = function (i) {
      if (!isAlive()) return;
      if (i >= steps.length) { onDone(); return; }
      steps[i](function () { safeTimeout(function () { runStep(i + 1); }, 380, isAlive); });
    };
    runStep(0);
  }

  function check(container, stepKey, done, holdMs) {
    var cb = container.querySelector('[data-step="' + stepKey + '"]');
    if (cb) cb.classList.add('is-checked');
    setTimeout(done, holdMs);
  }

  function typeIn(container, stepKey, text, isAlive, done) {
    var el = container.querySelector('[data-step="' + stepKey + '"]');
    if (!el) { done(); return; }
    el.classList.add('is-active');
    var i = 0;
    (function step() {
      if (!isAlive()) return;
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i += 1;
        setTimeout(step, 32 + Math.random() * 32);
      } else {
        el.classList.remove('is-active');
        done();
      }
    })();
  }

  function selectOption(container, stepKey, value, done, holdMs) {
    var el = container.querySelector('[data-step="' + stepKey + '"]');
    if (!el) { done(); return; }
    el.classList.add('is-active');
    setTimeout(function () {
      var valueEl = el.querySelector('.rfp-select-value');
      if (valueEl) valueEl.textContent = value;
      el.classList.add('has-value');
      el.classList.remove('is-active');
      setTimeout(done, holdMs);
    }, 360);
  }

  function activateSend(container, done, holdMs) {
    var btn = container.querySelector('.rfp-form-send');
    if (btn) btn.classList.add('is-active');
    setTimeout(done, holdMs);
  }

  function resetForm(container) {
    var demo = container.querySelector('.rfp-form-demo');
    if (demo) demo.classList.remove('is-thanks');
    Array.prototype.forEach.call(container.querySelectorAll('.rfp-checkbox'), function (c) { c.classList.remove('is-checked'); });
    Array.prototype.forEach.call(container.querySelectorAll('.rfp-input'), function (i) { i.textContent = ''; i.classList.remove('is-active'); });
    Array.prototype.forEach.call(container.querySelectorAll('.rfp-select'), function (sel) {
      sel.classList.remove('has-value', 'is-active');
      var v = sel.querySelector('.rfp-select-value'); if (v) v.textContent = 'Select...';
    });
    var btn = container.querySelector('.rfp-form-send'); if (btn) btn.classList.remove('is-active');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
