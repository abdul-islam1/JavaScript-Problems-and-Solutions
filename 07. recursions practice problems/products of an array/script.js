"use strict";

const productOfArray = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[arr.length - 1] * productOfArray(arr.splice(0, arr.length - 1));
  }
};

//test cases
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([5, 6, 10]));
