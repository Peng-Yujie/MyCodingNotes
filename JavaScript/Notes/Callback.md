# Callback Functions

`Callback funtion` is a function that is passed as an argument to another function. It is then invoked inside the outer function to complete some kind of routine or action.

`Higher-order function` is a function that takes another function as an argument and/or returns another function.

```js
// This is a callback function
const greeting = () => {
  console.log("Hello, World!");
};
// This is a higher-order function
setInterval(greeting, 1000);
```

## Call Stack and Callback Queue

`Call Stack` keeps track of function calls. When a function is called, it is pushed onto the stack. When the function completes, it is popped off the stack.

`Callback Queue` stores callback functions. When the call stack is empty, the event loop takes the first function in the queue and pushes it onto the call stack.

## Use Callback Functions

Can be used to handle [asynchronous problems](Asynchronous.md).

For example, we can use a callback function to ensure it is only executed after another function is completed.

```js
let arr = [1, 2, 3, 4, 5];
const displayArr = () => console.log(arr);
const addArr = (el) => {
  setTimeout(() => {
    arr.push(el);
  }, 2000);
};
addArr(6);
displayArr(); // [1, 2, 3, 4, 5]
```

```js
let arr = [1, 2, 3, 4, 5];
const displayArr = () => console.log(arr);
const addArr = (el, callback) => {
  setTimeout(() => {
    arr.push(el);
    callback();
  }, 2000);
};
addArr(6, displayArr); // [1, 2, 3, 4, 5, 6]
```

## Use Async Functions

[Async/await](Asynchronous.md#asyncawait)

`await` will wait for the current function to complete before moving to next line.
