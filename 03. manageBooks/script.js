let bookArr = [
  {
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    yearPublished: "1902",
    genre: "Novel",
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    yearPublished: "1861",
    genre: "Novel",
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    yearPublished: "1953",
    genre: "Satire",
  },
];

//test case for adding
const commandObj1 = {
  type: "add",
  book: {
    title: "Das Kapital",
    author: "Karl Marx",
    yearPublished: "1867",
    genre: "Philosophical Literature",
  },
};

//test case for reomoving
const commandObj2 = {
  type: "remove",
  book: {
    title: "Catch-22",
    author: "Karl Marx",
    yearPublished: "1867",
    genre: "Philosophical Literature",
  },
};

//test case for filtering
const commandObj3 = {
  type: "filter",
  book: {
    title: "Catch-22",
    author: "Karl Marx",
    yearPublished: "1867",
    genre: "Novel",
  },
};

const manageBooks = (bookArr, commandObj) => {
  if (commandObj.type === "add") {
    bookArr[bookArr.length] = { ...commandObj.book };
    return bookArr;
  } else if (commandObj.type === "remove") {
    for (let i = 0; i < bookArr.length; i++) {
      if (bookArr[i].title === commandObj.book.title) {
        bookArr.splice(i, 1);
        return bookArr;
      }
    }
  } else if (commandObj.type === "filter") {
    let newArr = [];
    for (let i = 0; i <= bookArr.length - 1; i++) {
      if (bookArr[i].genre === commandObj.book.genre) {
        newArr.push({ ...bookArr[i] });
      }
    }
    return newArr;
  }
};
// console.log(bookArr);
console.log(manageBooks(bookArr, commandObj1));

console.log(manageBooks(bookArr, commandObj2));

console.log(manageBooks(bookArr, commandObj3));
