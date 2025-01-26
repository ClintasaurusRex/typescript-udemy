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
```
