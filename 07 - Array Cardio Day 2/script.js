// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
  // same with multi-line if statement 👇
  // if (currentYear - person.year >= 19) {
  //   return true;
  // }
});
console.log('Is there at least one adult?: ' + isAdult);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

console.log('Is everyone an adult?: ' + allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const uniqueComment = comments.find((comment) => {
  return comment.id === 823423;
});

console.log(uniqueComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

// splice() method either adds or removes items from an array
// TO REMOVE, specify the index, and the number of elements you want to remove.
// for example comments.splice(2,1) => will remove one item at index 2

// TO ADD, complete the function with elements you want to add.
// for example comments.splice(1,2, "wow", "amazing") -> will remove 2 elements at index one and add "wow" and "amazing".

const index = comments.findIndex((comment) => {
  return comment.id === 823423;
});
comments.splice(index, 1);

console.table(comments);
