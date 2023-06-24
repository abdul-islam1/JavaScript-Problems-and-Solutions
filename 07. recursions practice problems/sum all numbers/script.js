"use strict";

const sumRange = (num) => {
  if (num === 1) {
    // base case
    return 1;
  } else {
    return num + sumRange(num - 1);
  }
};

console.log(sumRange(3));
