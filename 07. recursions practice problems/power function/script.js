"use strict";

const power = (num, pow) => {
  if (pow === 0) return 1;
  else return num * power(num, pow - 1);
};

// test cases

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
