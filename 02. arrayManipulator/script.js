const arrayManipulator = (wordsArr, method, item) => {
  if (method === "includes") {
    for (let i = 0; i <= wordsArr.length - 1; i++) {
      if (wordsArr[i] === item) {
        return true;
      }
    }
    return false;
  } else if (method === "indexOf") {
    for (let i = 0; i <= wordsArr.length - 1; i++) {
      if (wordsArr[i] === item) {
        return i;
      }
    }
    return -1;
  } else if (method === "join") {
    let str = "";
    for (let i = 0; i <= wordsArr.length - 1; i++) {
      str += `${wordsArr[i]} ${item} `;
    }

    str = str.substring(0, str.length - (item.length + 2)); // removing space at he end and adding a period.
    return str;
  } else if (method === "reverse") {
    let revArr = [];
    for (let i = 0; i <= wordsArr.length - 1; i++) {
      let str = "";
      for (let j = wordsArr[i].length - 1; j >= 0; j--) {
        str += wordsArr[i][j];
      }
      revArr.push(str);
    }
    return revArr;
  } else {
    console.log("Invalid method");
  }
};

const testArr = ["car", "bus", "bike"];

console.log(arrayManipulator(testArr, "includes", "bike")); // includes | expected output: true
console.log(arrayManipulator(testArr, "includes", "plane")); // dosen't include | expected output: false

console.log(arrayManipulator(testArr, "indexOf", "bus")); // includes | expected output: 1
console.log(arrayManipulator(testArr, "indexOf", "plane")); // doesn't include | expected output: -1

console.log(arrayManipulator(testArr, "join", "plane")); // expected output: car plane bus plane bike

console.log(arrayManipulator(testArr, "reverse", "plane")); //expected output: [rac, sub, ekib]
