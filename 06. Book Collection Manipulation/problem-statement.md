Absolutely, here's a more complex problem that involves both object manipulation and string handling:

1. Imagine you have a collection of books, each represented by an object with the following properties: 'title', 'author', 'year', and 'genre'. Here is an example:

```javascript
let books = [
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
  // And so on...
];
```

2. Write a function `getBooksByAuthor` that accepts the array of book objects and an author's name as input. The function should return a new array containing the titles of all books written by the given author.

3. Additionally, write a function `filterBooksByYear` that accepts the array of book objects and a year as input. The function should return a new array containing the titles of all books published in or before the given year.

4. Lastly, write a function `groupBooksByGenre` that groups the books by their genre. The function should return an object where the keys are the genres and the values are arrays of books in that genre.

Each of these functions will require a different kind of logic and array/object manipulation. Good luck!
