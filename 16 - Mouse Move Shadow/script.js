const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100 px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  // the above is the same as this. This is called ES 6 destructuring
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  let { offsetX: x, offsetY: y } = e;

  // this if statement is needed because otherwise x and y would always be relative ti the e.target. So x goes to 0 when you're not hovering on the div but on the h1 element
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;

  console.log(xWalk, yWalk);
}

hero.addEventListener('mousemove', shadow);
