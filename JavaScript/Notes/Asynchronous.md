# Asynchronous

- **asynchronous** means that the order of execution is not guaranteed.
- **non-blocking** means code execution doesn't wait for an operation to finish before moving on to the next one.
- What makes the script asynchronous is not the function itself, but the way it is called.

## AJAX
AJAX stands for Asynchronous JavaScript and XML.
- Server and client
- Online API: receive request and send response
  - **Node.js(TBD)**
- XML: Extensible Markup Language, which we barely use now
- JSON: JavaScript Object Notation, which is more popular now

### XMLHttpRequest
```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api-to-call.com/endpoint'); // create a new request and open it
xhr.send(); // send the request
const [data] = xhr.responseText; // get the response
```

## Callback Hell
Callback hell refers to the fact that the code is difficult to read and follow because of the many callbacks.
- nested callbacks
- hard to debug

## Promises
Modern JavaScript introduced the concept of promises to solve the problem of callback hell.

### What is a Promise?
**Promise:** A container for an asynchronously delivered value(in the future).
- No need to rely on callbacks and events anymore
- Chainable
- **Lifecycle**
  - pending: before the future value is available
  - settled: asynchronous task has completed
    - fulfilled: the operation was successful, the value is available
    - rejected: the operation failed

### fetch() | Bulid a Promise
fetch() is a web API that can be used to create requests. It returns a promise.

### then() | Handle a Fulfilled Promise
then() is a higher-order function that takes two callback functions as arguments.
- The first callback is called if the promise is fulfilled.
- The second callback is called if the promise is rejected.