"use strict";

// Lastly, write a function `groupBooksByGenre` that groups the books by their genre. The function should return an object where the keys are the genres and the values are arrays of books in that genre.

let books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Novel",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Novel",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
  },
];

//
const extractByProp = (objArray, prop) => {
  let tempArr = [];
  objArray.forEach((e) => {
    tempArr.push(e[prop]);
  });
  return tempArr;
};

const getBooksByAuthor = (bookObjArr, authorName) => {
  let filteredObjectArray = bookObjArr.filter(
    (item) => item.author === authorName
  ); //filtering relevant objects containing titles

  const bookTitleArray = extractByProp(filteredObjectArray, "author");
  return bookTitleArray;
};

const filterBooksByYear = (bookObjArr, bookYear) => {
  let filteredObjectArray = bookObjArr.filter((item) => item.year > bookYear); //filtering relevant objects containing titles
  const bookTitleArray = extractByProp(filteredObjectArray, "author");
  return bookTitleArray;
};

const groupBooksByGenre = (bookObj) => {
  let genreArray = [];
  let genreObj = {};

  bookObj.forEach((item) => {
    if (!genreArray.includes(item.genre)) {
      genreArray.push(item.genre);
    }
  });

  bookObj.forEach((item) => {
    genreObj[item.genre] = [];
    genreObj[item.genre].push({ ...item });
  });
  return genreObj;
};

// Test Cases
console.log(filterBooksByYear(books, 1940));
console.log(getBooksByAuthor(books, "Harper Lee"));
console.log(groupBooksByGenre(books));
