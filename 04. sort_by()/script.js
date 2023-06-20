// users = [ //sorted
//   {
//     id: 1,
//     name: "John Doe",
//     age: 25,
//     created_at: "2022-01-15",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     age: 30,
//     created_at: "2023-05-10",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     age: 20,
//     created_at: "2022-11-03",
//   },
//   {
//     id: 4,
//     name: "Bob Anderson",
//     age: 35,
//     created_at: "2021-06-25",
//   },
//   {
//     id: 5,
//     name: "Charlie Brown",
//     age: 28,
//     created_at: "2022-07-30",
//   },
// ];
users = [
  //unsorted
  {
    id: 1,
    name: "John Doe",
    age: 25,
    created_at: "2022-01-15",
  },
  {
    id: 4,
    name: "Bob Anderson",
    age: 35,
    created_at: "2021-06-25",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 20,
    created_at: "2022-11-03",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    created_at: "2023-05-10",
  },
  {
    id: 5,
    name: "Charlie Brown",
    age: 28,
    created_at: "2022-07-30",
  },
];
const sort_by = (userArr, key) => {
  let swap = {};
  if (key === "age") {
    for (let i = 0; i < userArr.length; i++) {
      for (let j = i; j < userArr.length; j++) {
        if (userArr[j].age < userArr[i].age) {
          swap = { ...userArr[j] };
          userArr[j] = { ...userArr[i] };
          userArr[i] = { ...swap };
        }
      }
    }
    return userArr;
  } else if (key === "id") {
    let swap = {};
    for (let i = 0; i < userArr.length; i++) {
      for (let j = i; j < userArr.length; j++) {
        if (userArr[j].id < userArr[i].id) {
          swap = { ...userArr[j] };
          userArr[j] = { ...userArr[i] };
          userArr[i] = { ...swap };
        }
      }
    }
    return userArr;
  } else if (key === "date") {
    let swap = {};
    for (let i = 0; i < userArr.length; i++) {
      for (let j = i; j < userArr.length; j++) {
        if (new Date(userArr[j].created_at) < new Date(userArr[i].created_at)) {
          console.log(`${j} is less than ${i}`);

          swap = { ...userArr[i] };
          userArr[i] = { ...userArr[j] };
          userArr[j] = { ...swap };
        }
      }
    }
    return userArr;
  } else return "Invalid Input";
};

// console.log(sort_by(users, "age"));
// console.log(sort_by(users, "id"));
console.log(sort_by(users, "date"));
