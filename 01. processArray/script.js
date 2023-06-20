const processArray = (arr, operation) => {
  let newArr = [];
  if (operation === "filter") {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } else if (operation === "reduce") {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
      sum += arr[i];
    }
    return sum;
  } else if (operation === "map") {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
      newArr[i] = arr[i] ** 2;
    }
    return newArr;
  } else if (operation === "sort") {
    let swap = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
      for (let j = i; j <= arr.length - 1; j++) {
        if (arr[j] < arr[i]) {
          swap = arr[i];
          arr[i] = arr[j];
          arr[j] = swap;
        }
      }
    }
    return arr;
  } else {
    return "Invalid operation";
  }
};

/// Test case

console.log(processArray([1, 2, 3, 4, 5, 6, 7, 8, 9], "filter")); // expected output: [2, 4, 6, 8]
console.log(processArray([1, 2, 3, 4, 5, 6, 7, 8, 9], "reduce")); //expected output: 45
console.log(processArray([1, 2, 3, 4, 5, 6, 7, 8, 9], "map")); // expected output: [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(processArray([3, 2, 5, 8, 1, 4, 7, 3, 9, 1, 5], "sort")); //expected output: [1, 1, 2, 3, 3, 4, 5, 5, 7, 8, 9]
