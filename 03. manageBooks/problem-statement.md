Managing a Library Collection with JavaScript Array and Object Methods

Let's assume you work at a library and are in charge of organizing the books. Each book in the library is represented as an object with the following properties: title, author, yearPublished, and genre.

The books collection is stored in an array, where each element is a book object. Your task is to manage this collection by creating a JavaScript function named manageBooks.

This function should take two parameters:

An array of book objects, books.
An object, command, which describes the operation performed on the books array.
The command object will have two properties:

type: a string that can be either 'add', 'remove', or 'filter'.
book: an object representing a book (used when adding or removing), or a string representing a genre (used when filtering).
Your function should perform the following operations based on the command object:

If type is 'add', your function should add the book object from the command to the books array, and return the updated array.
If type is 'remove', your function should remove the book object from the command from the books array (match by title), and return the updated array. If the book is not found, return the original array.
If type is 'filter', your function should return a new array that contains only the books that match the genre from the command.
If type is not any of the above, your function should return the string "Invalid command".
Constraints:

The books array will contain up to 10^4 elements.
Each book object will have a title and author of maximum length 100, a yearPublished that is a positive integer, and a genre of maximum length 50.
The command object will always have a type string that is non-empty and contains only lowercase English alphabetic characters.
The book object in the command will adhere to the same constraints as the book objects in the books array.
The genre string in the command will be non-empty and contain only lowercase English alphabetic characters and spaces.
Your solution should only use built-in JavaScript methods and features, no external libraries or packages are allowed.





















































