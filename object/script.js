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
