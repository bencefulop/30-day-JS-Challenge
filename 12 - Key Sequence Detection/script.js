const pressed = [];
const secretCode = 'bence';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  // if (pressed.join('') === secretCode) {  👈 this also works
  if (pressed.join('').includes(secretCode)) {
    console.log('Ding ding');
    cornify_add();
  }

  console.log(pressed);
});
