# Junior Developer Interview Notes

## **JavaScript**

### **Basics and Core Concepts**

- **Data Types**: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `object`.
- **var vs let vs const**:
  - `var` is function-scoped, `let` and `const` are block-scoped.
  - `const` cannot be reassigned.
- **Hoisting**: Variables and function declarations are moved to the top of their scope during execution.
- **Event Loop**: Handles asynchronous operations by using a queue system to process callbacks.
- **Closures**: A function that remembers the variables from its outer scope.

### **Functions and Scopes**

- **Function Declarations vs Expressions**:
  - Declarations are hoisted, expressions are not.
- **Arrow Functions**: Do not bind their own `this`.
- **call, apply, bind**:
  - `call`: Invokes a function with a given `this` and arguments.
  - `apply`: Same as `call` but takes arguments as an array.
  - `bind`: Returns a new function with `this` set.

### **Asynchronous Programming**

- **setTimeout vs setInterval**:
  - `setTimeout`: Executes once after a delay.
  - `setInterval`: Repeats execution at a fixed interval.
- **Promises**: Represent a value that may be available now, later, or never.
- **async/await**: Simplifies handling promises.

### **DOM Manipulation**

- Use `document.querySelector` or `document.getElementById` to select elements.
- **Event Delegation**: Attach events to a parent element and use event bubbling to handle child elements.

### **Array and Object Methods**

- Common Array Methods:
  - `map`: Creates a new array by applying a function to each element.
  - `filter`: Returns a new array with elements that pass a test.
  - `reduce`: Reduces an array to a single value.
- Copying Objects:
  - Use `Object.assign` or the spread operator (`...`).

### **Error Handling**

- Use `try...catch` to catch and handle errors.

---

## **React**

### **Basics**

- **What is React?** A library for building user interfaces.
- **Functional vs Class Components**:
  - Functional: Simpler, often use hooks.
  - Class: Includes lifecycle methods.
- **JSX**: A syntax extension for JavaScript that resembles HTML.

### **State and Props**

- **State**: Local to a component, can change over time.
- **Props**: Data passed from parent to child components.
- Functional components use `useState` for managing state.

### **Lifecycle Methods**

- Examples: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.
- Functional components use `useEffect` to mimic lifecycle behavior.

### **Hooks**

- **useState**: Manages state in functional components.
- **useEffect**: Handles side effects (e.g., fetching data, subscribing to events).
- **useLayoutEffect**: Similar to `useEffect` but runs synchronously after DOM updates.

### **Routing**

- Use `react-router-dom` for routing.
- Dynamic Routes: `<Route path="/user/:id">`.

### **Performance Optimization**

- **React.memo**: Prevents re-rendering if props haven’t changed.
- **Reconciliation**: React updates only the parts of the DOM that changed.

### **Forms**

- **Controlled Components**: Form data is controlled by React state.
- **Uncontrolled Components**: Form data is handled by the DOM.

---

## **Express.js**

### **Basics**

- **What is Express?** A web minimalist framework for Node.js.
- **Setup**:
  ```javascript
  const express = require("express");
  const app = express();
  app.listen(3000, () => console.log("Server running on port 3000"));
  ```

### **Routing**

- **Basic Route**:
  ```javascript
  app.get("/", (req, res) => res.send("Hello World!"));
  ```
- **app.get vs app.post**:
  - `app.get`: For retrieving data.
  - `app.post`: For sending data.

### **Middleware**

- Middleware functions handle requests before they reach the route handler.
- Examples: `express.json()`, `express.urlencoded()`.

### **Error Handling**

- Custom Error Middleware:
  ```javascript
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  ```

### **REST APIs**

- Define CRUD routes:
  ```javascript
  app.post('/resource', (req, res) => { ... });
  app.get('/resource/:id', (req, res) => { ... });
  app.put('/resource/:id', (req, res) => { ... });
  app.delete('/resource/:id', (req, res) => { ... });
  ```

### **Authentication**

- Common strategies: Sessions, OAuth, JWT.
- Example JWT Implementation:
  ```javascript
  const jwt = require("jsonwebtoken");
  const token = jwt.sign({ id: user._id }, "secret_key");
  ```

### **Database Integration**

- Use libraries like `mongoose` for MongoDB or `pg` for PostgreSQL.
- Perform CRUD operations in route handlers.

---

## **General Coding Challenges**

### JavaScript

1. Reverse a string:
   ```javascript
   const reverseString = (str) => str.split("").reverse().join("");
   ```
2. Find duplicates in an array:

   ```javascript
   const findDuplicates = (arr) =>
     arr.filter((item, index) => arr.indexOf(item) !== index);

   const findDuplicates = (arr) =>
     arr.filter((item, index) => arr.indexOf(item) !== index);
   ```

```js
// Example usage:
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
console.log(findDuplicates(numbers)); // Output: [2, 5]

const fruits = ["apple", "banana", "apple", "orange", "banana"];
console.log(findDuplicates(fruits)); // Output: ['apple', 'banana']
```

````

### React

- Build a simple to-do list app with `useState`.
- Create a button click handler to log a message to the console.

### Express

- Build a RESTful API with CRUD endpoints.
- Return JSON data from a route:
```javascript
app.get("/data", (req, res) => res.json({ message: "Hello World!" }));
````
