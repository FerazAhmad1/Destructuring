"use-strict";

const arr = [1, 2, 3];

// simple array destructuring

const [a, b, c] = arr;
console.log(a, b, c);

const categories = ["pizza", "chinese", "Turkish", "Italian", "Arbian"];
const [first, second] = categories; // taking first two value from categories array
// we can leave a hole with space and comma
const [, secondary, tereray] = categories; // secondary =
console.log(secondary, tereray);
console.log(first, second);
