Sort users by attribute?

Given the following array of user objects:

users = [
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
]
Can you write a function, sort_by(), that takes this array and a key (such as 'age', 'id', or 'created_at') as arguments, and returns the array sorted in ascending order according to the specified key? In other words, if you run sorted_array = sort_by(users, 'age'), it should return the users array sorted by users' ages.
