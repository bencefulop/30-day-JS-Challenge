// checkbox.checked = !checkbox.checked;

const items = document.querySelectorAll('.item');
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach((item) => item.addEventlistener('click', handleCheck));

function handleCheck(e) {
  console.log(e);
}
