(function () {
  var header = document.getElementById("scroll-header");
  if (!header) return;

  var threshold = 80;

  function onScroll() {
    header.classList.toggle("is-visible", window.scrollY > threshold);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
