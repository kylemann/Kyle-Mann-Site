/* Marks the sticky tab nav as stuck once it reaches the top of the viewport,
   which reveals the contact icons on its right. */
(function () {
    var nav = document.querySelector('nav.work-nav');
    if (!nav) return;
    var ticking = false;
    function update() {
        ticking = false;
        nav.classList.toggle('is-stuck', window.pageYOffset > 0 && nav.getBoundingClientRect().top <= 0);
    }
    function onScroll() { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('hashchange', function () { setTimeout(update, 0); });
    window.addEventListener('load', function () { setTimeout(update, 0); });
    update();
})();
