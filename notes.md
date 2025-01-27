// You could do this if you want to make the variable open
// let userName:

// or and explicit type check
// let userName: string;
// let userName: string = 'Clint'; this doesnt really make sense

// userName = 34; Type 'number' is not assignable to type 'string'

# TypeScript Tutorial Notes

## 1. Introduction to TypeScript

- TypeScript is a superset of JavaScript that adds static typing
- Developed and maintained by Microsoft
- Compiles down to regular JavaScript
- Provides better tooling, error detection, and code organization

## 2. Setting Up TypeScript

### Installation

```bash
npm install -g typescript
```

Creating a TypeScript Project
tsc --init

Watch Mode
tsc --watch

Compiling Single File
tsc filename.ts

3. Basic Types
   string: Text data
   number: All numbers (no separate int/float)
   boolean: true/false
   array: Type[] or Array
   tuple: Fixed-length array with defined types
   enum: Enumerated values
   any: Dynamic typing (avoid when possible)
   void: No return value
   null and undefined

```ts
4. Type Annotations
let name: string = "Clint";
let age: number = 30;
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];

5. Interfaces: Interfaces in TypeScript are like contracts or blueprints that define the structure of an object. They're powerful tools for type-checking and code organization.

Required Properties:
name and age are required properties
If you create an object of type User, it must have these properties with their specified types

Optional Properties:
The ? symbol makes a property optional (like email in the example)
You can include or omit optional properties when creating objects


interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

6. Functions

function greet(name: string): string {
    return `Hello, ${name}!`;
}

7. Classes

class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello, I'm ${this.name}`);
    }
}

8. Generics
function getArray<T>(items: T[]): T[] {
    return items;
}


9. Type Inference
TypeScript can automatically determine types
Best practice: Let TypeScript infer when obvious, annotate when not

let id: string | number;
id = "abc123";
id = 123;

11. Best Practices
Enable strict mode in tsconfig.json
Avoid using any type
Use interfaces for object shapes
Leverage type inference
Use union types instead of any
Document complex types

Type Guards & Type Narrowing - A Closer Look
When using "Type Guards" (i.e., if statements that check which concrete type is being used), TypeScript performs so-called "Type Narrowing".

This means that TypeScript is able to narrow a broader type down to a more specific type.

Consider this example:

function combine(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  return `${a} ${b}`;
}
In this example, inside the if statement, TypeScript narrows the types of a & b from "either a number or a string" down to "definitely a number" - because that's what the condition of the if check says (and TypeScript "understands" that).

After the if statement, TypeScript understands that a and b are again either a number or a string"  because we only make it into the if statement if both are of type number. The type therefore is broader again.

You can add all kinds of "Type Guards" to run code conditionally and get TypeScript to narrow a type:

Use JavaScript's typeof operator as shown above to check if you're dealing with a string, number, boolean, object, function, symbol or bigint type

Use JavaScript's instanceof operator to check if an object value is based on some specific class

Use JavaScript's in operator to check if an object contains a specific property

Important: You can NOT check if a value meets the definition of a custom type (type alias) or interface type. These are TypeScript-specific features for which no JavaScript equivalent exists. Therefore, since those if checks need to run at runtime, you can't write any code that would be able to check for those types at runtime.

For example, the below code won't work because the User type does not exist once the code is compiled to JavaScript:

type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  age: number;
  permissions: string[];
};

function login(u: User | Admin) {
  if (typeof u === User) {
    // do something
  }
}
But you could check for the existence of the permissions property since only the Admin object will have one:

function login(u: User | Admin) {
  if ('permissions' in u) {
    // do something
  }
}
That code would work at runtime.
```
