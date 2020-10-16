// function only runs every 20 ms to prevent performance issues.
// Without this, the checkSlide function would run approx 90+ times if you scroll from top to bottom.
// With debounce it's only called 6-8 times per top-bottom scroll
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const pictures = document.querySelectorAll('.slide-in');

function checkSlide() {
  // determine when we've scrolled halfway through the picture
  pictures.forEach((picture) => {
    const slideInAt = window.scrollY + window.innerHeight - picture.height / 2;
    // determine the bottom of image
    const imageBottom = picture.offsetTop + picture.height;
    const isHalfShown = slideInAt > picture.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      picture.classList.add('active');
    } else {
      picture.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
