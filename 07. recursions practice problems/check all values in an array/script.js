"use strict";

const all = function (arr, checkFunction) {
  if (arr.length === 1) return checkFunction(arr[0]);
  else {
    return Boolean(checkFunction(arr.pop()) * all(arr, checkFunction));
  }
};

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false
