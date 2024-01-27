"use-strict";

const personX = {
  name: "Feraz",
  secondName: "Ahmad",
  address: {
    vill: "Semra",
    dist: "Gopalganj",
    pinCode: "841440",
  },
};

// object simple destructuring
const { name, secondName } = personX;

console.log(name, secondName);

// rename properties during destructuring
const { name: canditateName, secondName: lastName } = personX;

console.log(canditateName, lastName);

// object destructuring with default value;

const {
  name: studentName = [],
  secondName: title = [],
  age: studentAge = [],
} = personX;

console.log(studentName, title, studentAge);
