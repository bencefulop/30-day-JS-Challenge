// function only runs every 20 ms to prevent performance issues.
// Without this, the checkSlide function would run approx 90+ times if you scroll from top to bottom.
// With debounce it's only called 6-8 times per top-bottom scroll
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const pictures = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  // determine when we've scrolled halfway throigh the picture
  pictures.forEach((picture) => {
    const slideInAt = window.scrollY + window.innerHeight - picture.height / 2;
    // determine the bottom of image
    const imageBottom = picture.offsetTop + picture.height;
  });
}

window.addEventListener('scroll', debounce(checkSlide));
