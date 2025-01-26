let userName: string = "Clint";

userName = "Clint";

let userAge: number = 34;

let isValid: boolean = true;

// string, number, boolean the most important types

let userID: string | number = "abc1";
userID = 123;

// userID = true

// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// user = 'Clint'// This will cause an error cause its not a object

user = {
  name: "Clint",
  age: 32,
  isAdmin: true,
  id: "abc", // 123
};

// user = {};

// let hobbies: Array<string> ;
let hobbies: string[]; // number, boolean[]

//{name: string; age: number}

hobbies = ["Sports", "Cooking", "Games"];
// hobbies = [1,2,3]
