#JavaScript

## for-of loop
for each item in the array
entries()

```js
for(const [i, el] of menu.entries()){console.log(`${i+1}: ${el}`);
```

## ? optional chaining
when you don't know whether it exists, if the part before ? exist, then read the rest part.

- objects

`console.log(openinghours.mon?.open);`

`console.log(openinghours?.mon?.open);`

- methods

`restaurant.order?.(0, 1) ?? 'Method does not exist';`

- arrays

`users[0]?.name ?? 'User array empty';`

## PassByValue
JavaScript does not have 'pass by reference'
only allow passing by value

## Higher-order Functions
- receive a function as a parameter
- return new function

## Function.function
- call
`function.call(thisArg, ...any arg array);`

- bind
add more defined objects and create a new function
`const bookEW23 = book.bind(eurowings, 23);`


## Arrays

### create and fill
- `const arr = new Array(7);` create an array with 7 empty elements: `[empty × 7]`
  - `const arr2 = [...arr];` create a new array with the same length and elements
- `arr.fill(1);` fill the array with 1: `[1, 1, 1, 1, 1, 1, 1]`
  - `arr.fill(1, 3);` fill the array with 1 from index 3: `[empty × 3, 1, 1, 1, 1]`
  - `arr.fill(1, 3, 5);` fill the array with 1 from index 3 to 5: `[empty × 3, 1, 1, empty × 2]`
- `const arr = Array.from({length: 7}, () => 1);` create an array with 7 elements, each element is 1: `[1, 1, 1, 1, 1, 1, 1]` is the same as `const arr = new Array(7).fill(1);`

### slice
slice does not mutate the original array, it returns a new array
- `arr.slice(start);`
- `arr.slice(start, end);`
- `arr.slice(-1);` last element

### splice
splice mutates the original array, it returns the deleted elements and the original array is changed
- `arr.splice(start, deleteCount);` deleteCount is optional, it will delete (deleteCount) elements from start

### reverse
reverse mutates the original array, it returns the reversed array and the original array is changed
- `arr.reverse();`

### concat
concat does not mutate the original array, it returns a new array
- `arr.concat(arr2);`

### join
join does not mutate the original array
join returns a string
- `arr.join(' ');` join the elements with ' '

### at
arr[0] is the same as arr.at(0)
it is useful when you want to use negative index to get the last element
- `arr.at(-1);` last element
it also works on strings
- `str.at(-1);` last character

### forEach
it's similar to for-of loop
- `arr.forEach(function(el, i, arr){});`
  - el: element
  - i: index
  - arr: array
  - the order of the parameters cannot be changed
- use arrow function: `arr.forEach(el => {});`, `arr.forEach((el, i) => {});`

**forEach with Maps**
To loop over maps, we need to use the `map.forEach()` method:
- `map.forEach(function(value, key, map){});`
  - value: value
  - key: key
  - map: map
  - the order of the parameters cannot be changed

**forEach with Sets**
To loop over sets, we need to use the `set.forEach()` method:
- `set.forEach(function(value, key, set){});`
  - value: value
  - key: same as value in sets
  - set: set
- To avoid confusion, we can use the same name for value and key: `set.forEach(function(value, _, set){});`

### map
`map` returns a new array containing the results of applying an operation on all original array elements
- `const arr2 = arr.map(item => item * 2);`

### filter
`filter` returns a new array containing the array elements that passed a specified test condition

### reduce
`reduce` boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
- snowball effect
- get the sum of all elements
  - `const arrSum = arr.reduce((acc, cur) => acc + cur, 0);`
  - acc: accumulator
  - cur: current value
  - 0: initial value
- get the average of all elements
  - `const arrAvg = arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);`
- get the maximum value
  - `const max = arr.reduce((acc, cur) => acc > cur ? acc : cur);`

### find
`find` returns the value of the **first** array element that passed a specified test function
- `const firstNegative = arr.find(el => el < 0);`
  - == `const firstNegative = arr.filter(el => el < 0)[0];`
- get the index of the element
  - `const firstNegativeIndex = arr.findIndex(el => el < 0);`

### includes
`includes` returns true if the array contains a certain element, and false if not
- equality
  - `arr.includes('2');` returns false
  - `arr.includes(2);` returns true

### some
`some` returns true if at least one element meets the condition
- condition
  - `arr.some(el => el === 2);` returns true
  - `arr.some(el => el === 20);` returns false

### every
`every` returns true if all elements meet the condition
- condition
  - `arr.every(el => el === 2);` returns false
  - `arr.every(el => el > 0);` returns true

### flat
`flat` returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
```js
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

// 2 levels deep
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [[1, 2], 3, 4, [5, 6], 7, 8]
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// duplicate elements in different levels will not be removed
const arrDup = [1,[1,2],[1,2,3]];
console.log(arrDup.flat()); // [1, 1, 2, 1, 2, 3]
```

### flatMap
`flatMap` = `map` + `flat`
```js
// map and then flat
arr.map(el => el * 2).flat().reduce((acc, cur) => acc + cur, 0);
// flatMap
arr.flatMap(el => el * 2).reduce((acc, cur) => acc + cur, 0);
```

### sort
`sort` sorts the elements of an array in place and returns the sorted array
- `arr.sort();` sort by unicode, works for strings
- `arr.sort((a, b) => a - b);` sort by number


## DOM
document: the whole HTML document
- Access the whole document: `document.documentElement`
- Access the head: `document.head`
- Access the body: `document.body`
- Access an ID: `document.getElementById('id')`
- Access all elements with a tag: `document.getElementsByTagName('tag')`
- Access all elements with a class: `document.getElementsByClassName('class')`
- Access all elements with a selector: `document.querySelector('selector')`
- Access all elements with a selector: `document.querySelectorAll('selector')`
  - difference between querySelector and querySelectorAll
    - querySelector: returns the first element that matches the selector
    - querySelectorAll: returns all elements that match the selector


### Styles
- for element.style
  - it works for inline styles
  - the styles in CSS file cannot be accessed by element.style, it can only be accessed by getComputedStyle
    ```js
    element.style.backgroundColor = '#fff';
    console.log(element.style.backgroundColor); // #fff
    console.log(element.style.color); // empty string since we didn't set the color
    console.log(getComputedStyle(element).color); // getComputedStyle will return every style
    ```
- for document
  - we can set the style for the whole document by document.documentElement.style.setProperty:
    ```js
    document.documentElement.style.setProperty('--color-primary', 'orangered');
    ```

### Attributes
- standard attributes
  - we can access the standard attributes by `element.attribute`: `img.src`, `a.href`
  - **set attributes**: `element.attribute = 'xxx'`
- non-standard attributes
  - suppose we have customized attributes: `designer="xxx"`, then we can access it by `element.getAttribute('designer')`
  - in this case, `element.designer` will return undefined
  - if we don't have customized attributes, then `element.getAttribute('designer')` will return null
  - **set attributes**: `element.setAttribute('designer', 'xxx')`

```js
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // returns the absolute path
console.log(link.getAttribute('href')); // returns the relative path
```

### Classes
- `element.classList.add('class')`: add a class
- `element.classList.remove('class')`: remove a class
- `element.classList.toggle('class')`: if the class exists, remove it; if the class does not exist, add it
- `element.classList.contains('class')`: check if the class exists, returns true or false

### Event Handler

#### preventDefault
e.preventDefault() prevents the default behavior of the event
- `default behavior`: for example, submit button will submit the form, a link will redirect to the link

#### addEventListener
- `element.addEventListener('event', function);`
  - event: click, keydown, keyup, keypress, submit, load, DOMContentLoaded
  - function: the function to be executed when the event occurs
- `element.onEvent = function;`
  - event: click, keydown, keyup, keypress, submit, load, DOMContentLoaded
  - function: the function to be executed when the event occurs
  - it can only be used for one event

#### removeEventListener
it can remove the event listener, but it has to be a **named function**
```js
const h1Alert = function(e){
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', h1Alert);
};
h1.addEventListener('mouseenter', h1Alert);
```

#### setTimeout
- `setTimeout(function, time);`
  - function: the function to be executed after the time
  - time: the time in milliseconds: `1000` = 1 second

#### Capture and Bubbling
- Capture: the event is captured from the top to the bottom, in this case, from the parent to the grandchild
- Bubbling: the event is bubbled up from the bottom to the top, in this case, from the grandchild to the parent

Consider the following HTML:
```html
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
  </div>
</div>
```
In this case, if we add event listeners to all three elements, then the order of the event listeners will be:
- Capture: parent, child, grandchild
- Bubbling: grandchild, child, parent
  - `e.target`: the element that triggered the event
  - `e.currentTarget`: the element that the event listener is attached to

#### Event Propagation
- When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
- `e.stopPropagation()`: stop the event from bubbling up

#### Event Delegation
Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements.
1. Add the event listener to a common parent element
2. Determine what element originated the event
```js
document.querySelector('.nav__links').addEventListener('click', function (e) { // nav__links: parent element
  if (e.target.classList.contains('nav__link')) { // matching strategy
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
```

#### DOM Traversing
- go downwards:
  - `el.children`: returns all the children elements
  - `el.firstElementChild`: returns the first child element
  - `el.lastElementChild`: returns the last child element
- go upwards:
  - `el.parentElement`: returns the parent element
  - `el.closest('selector')`: returns the closest element that matches the selector
- go sideways:
  - `el.previousElementSibling`: returns the previous sibling element
  - `el.nextElementSibling`: returns the next sibling element
  - `el.parentElement.children`: returns all the siblings elements


