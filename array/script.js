"use-strict";

const arr = [1, 2, 3];

// simple array destructuring

const [a, b, c] = arr;
console.log(a, b, c);

const categories = ["pizza", "chinese", "Turkish", "Italian", "Arbian"];
const [first, second] = categories; // taking first two value from categories array
// we can leave a hole with space and comma
let [, secondary, tereray] = categories; // secondary =
// swaping
// let temp = secondary;
// secondary = tereray;
// tereray = temp;

// swapping using destructuring

[secondary, tereray] = [tereray, secondary];
