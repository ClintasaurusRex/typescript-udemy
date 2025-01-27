let userName: string = "Clint";

userName = "Clint";

let userAge: number = 34;

let isValid: boolean = true;

// string, number, boolean the most important types

let userID: string | number = "abc1";
userID = 123;

// userID = true

// let user: object;
// let user: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number;
// };
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

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

function add(a: number, b: number): number {
  // after the parathesis where undefined/void/number is you can set the return type
  const result = a + b;
  return result;
}

// Creating type Aliases
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);
// function calculate(
//   a: number,
//   b: number,
//   calcFn: (a: number, b: number) => number
// ) {
//   calcFn(a, b);
// }

// calculate(2, 5, add);

interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: "abc",
  email: "example@example.com",
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(creds);
login(new AuthCredentials());

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// // Merging types
// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "Clint",
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}
let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Clint",
};

// Literal Types

type Role = "admin" | "user" | "editor";

// forces it to be the specfic value you put next to it and you can use a uniion
let role: "admin" | "user" | "editor"; // 'admin', 'user', 'editor'

role = "admin";
role = "user";
role = "editor";
// role = 'abc' // this has an error

// Adding Guards

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

// Making sense of generic Types

let roles: Array<Role>;
roles = ["admin", "editor"];

// Build your own generic type

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Clint" },
  { age: 32 }
);
// newUser.name
