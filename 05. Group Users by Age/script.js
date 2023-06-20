"use strict";

let users = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    created_at: "2022-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    created_at: "2023-05-10",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 20,
    created_at: "2022-11-03",
  },
  {
    id: 4,
    name: "Bob Anderson",
    age: 35,
    created_at: "2021-06-25",
  },
  {
    id: 5,
    name: "Charlie Brown",
    age: 28,
    created_at: "2022-07-30",
  },
];

//making sorted ages array of ages and eliminating duplicates

const group_by_age = (users) => {
  let agesArr = [];
  let agesObj = {};

  //extracting all the ages
  users.forEach((item) => {
    if (!agesArr.includes(item.age)) {
      agesArr.push(item.age);
    }
  });

  // arranging all the ages
  agesArr.sort((a, b) => a - b);

  // creating object, containing ages as properties and arrays as values (to store objects)

  agesArr.forEach((item) => {
    agesObj[item] = [];
  });

  users.forEach((item) => {
    agesObj[item.age].push({ ...item });
  });
  return agesObj;
};

// group_by_age(users);

console.log(group_by_age(users));
