Given the following array of user objects where each object contains an 'age' property among others:

let users = [
{
"id": 1,
"name": "John Doe",
"age": 25,
"created_at": "2022-01-15"
},
{
"id": 2,
"name": "Jane Smith",
"age": 30,
"created_at": "2023-05-10"
},
{
"id": 3,
"name": "Alice Johnson",
"age": 20,
"created_at": "2022-11-03"
},
{
"id": 4,
"name": "Bob Anderson",
"age": 35,
"created_at": "2021-06-25"
},
{
"id": 5,
"name": "Charlie Brown",
"age": 28,
"created_at": "2022-07-30"
}
];
Can you write a function named group_by_age() in JavaScript that groups users by their ages? The function should take the users array as an argument and return an object where the keys are the ages and the values are arrays of user objects with that age.

For instance, if there are two users aged 20, one user aged 25, and one user aged 30, the function should return:

{
20: [
{age: 20, ....},
{age: 20, ...}
],
25: [
{age: 25, ....}
],
30: [
{age: 30, ....}
]
}
