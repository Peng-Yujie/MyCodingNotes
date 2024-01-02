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

```js
const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`) // fetch return promise
    .then(
      response => response.json()
      // err => alert(err) // handle error in the callback
      ) // return promise
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0]; // if borders exist, return the first element, otherwise return undefined
      if (!neighbour) return;
      return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`); // return a new promise
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => alert(err)) // catch any error in the chain
    .finally(()=>{...}); // always execute
}
getCountryData('canada');
```

### fetch() | Bulid a Promise
fetch() is a web API that can be used to create requests.
- Parameters: URL, options
  - `fetch('<url>')`
  - `fetch('<url>', {method: 'POST', body: JSON.stringify({name: 'john'})})`
- It returns a promise.

### then() | Handle a Fulfilled Promise
then() follows and handles a promise.
- Return a promise

### catch() | Handling Rejected Promises
catch() handles a rejected promise, it catches any error in the chain.

### finally() | Always Execute
finally() always executes, no matter the promise is fulfilled or rejected.

### throw Error
To handle error in the way we want, we can throw an error in the chain.

### Build a Promise
```js
const lotteryPromise = new Promise(function (resolve, reject) { // resolve and reject are callback functions
  if (Math.random() >= 0.5) {
    resolve('You WIN'); // resolve is called and the promise is fulfilled, the value can be accessed by then()
  } else {
    reject(new Error('You lost your money')); // the content within reject() can be any value(string, number, object, etc.), but it is recommended to be an Error object
  }
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
```


## Behind the Scene: The Event Loop
- JavaScript Engine: the program that executes JavaScript code
  - Call Stack: where the code is executed, only one at a time
  - Heap: where objects are stored
- Web APIs
  - DOM
  - AJAX
  - Timeout
- Callback Queue: where the callbacks are placed, waiting to be executed

### How Asynchronous Code Works
Event loop decides when each callback function is executed.

- The code is executed line by line
- When the **engine** encounters an asynchronous task, it sends it to the **Web APIs**
  - The rest of the code will continue to be executed
- The **Web APIs** will finish the task and put the **callback function** in the **Callback Queue**
  - The callback queue also contains the **DOM events**
- The **Event Loop** will put the callback function in the **Call Stack** when the **Call Stack** is empty(No code is being executed)
  - The microtasks queue has higher priority than the callback queue, the callback queue will be executed **only when the microtasks queue is empty**
  - What is in the microtasks queue?
    - Promises
    - Mutation Observer
    - QueueMicrotask()
    - process.nextTick()
    - Object.observe()
    - Mutation Events
    - UI Rendering

```js
console.log('Test start'); // 1
setTimeout(() => console.log('0 sec timer'), 0); // 4
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3
console.log('Test end'); // 2

// The console will print:
// Test start
// Test end
// Resolved promise 1
// 0 sec timer
```
In the example above, 
1. the first console.log() is executed
2. the setTimeout() is sent to the Web APIs
3. the Promise is sent to the Web APIs
4. the second console.log() is executed
5. the Promise is put in the microtasks queue, which has higher priority than the callback queue
6. the setTimeout() is put in the callback queue
7. the Event Loop puts the Promise in the Call Stack
8. the Event Loop puts the setTimeout() in the Call Stack

## Async/Await
Async/await is a modern way of handling asynchronous code.
- Async functions always return a **promise**
- await is only valid in an async function
- await pauses the execution of the async function, waiting for the promise to be fulfilled

```js
const whereAmI = async function (country) {
  const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`);
  console.log(res);
  // Same as:
  // fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(res => console.log(res));
}
whereAmI('canada');
console.log('FIRST'); // FIRST
// Output:
// FIRST
// Promise {<pending>}
```

### Convert Chainings to Async/Await

```js
const getCountryData = async function (country) {
  try { 
    const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`);
    const data = await res.json();
    renderCountry(data[0]);
    const neighbour = data[0].borders?.[0];
    if (!neighbour) return;
    const res2 = await fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
    const data2 = await res2.json();
    renderCountry(data2, 'neighbour');
  } catch (err) {
    alert(err);
  }
}
// same as:
// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(res => res.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
//     })
//     .then(res => res.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => alert(err))
//     .finally(()=>{...});
// }
getCountryData('canada');
```

### Error Handling
Cannot use `catch` to handle error in async/await, need to use `try...catch` instead.
  
```js
const func = async function() {
  try{
    //...
    // if there might be an error, use throw new Error('...')
    if(err) throw new Error('...');
    return res;
  } catch(err) {
    // handle error
  }
};

console.log('FIRST');
func().then(res => console.log(res));
console.log('LAST');

// Output:
// FIRST
// LAST
// res
```

### Returning Values from Async Functions
when calling this async function `func()`, it returns a promise, so we can use `then()` to handle the result.
- **note**: since `func()` is an async function, it will be executed asynchronously, so the `console.log('LAST')` will be executed before `func()` is finished.