function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
  document.documentElement.scrollLeft -= delta * scrollSpeed;
  document.body.scrollLeft -= delta * scrollSpeed;
  e.preventDefault();
}

if (window.addEventListener) {
  window.addEventListener("mousewheel", scrollHorizontally, { passive: false });
}
