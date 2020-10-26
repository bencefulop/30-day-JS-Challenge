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

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 red,
  ${xWalk * 1.8}px ${yWalk * 1.8}px 0 blue
  `;
}

hero.addEventListener('mousemove', shadow);
