#JavaScript

## for-of loop
for each item in the array
entries()

> for(const [i, el] of menu.entries()){console.log(`${i+1}: ${el}`);

## ? optional chaining
when you don't know whether it exists, if the part before ? exist, then read the rest part.

- objects

> console.log(openinghours.mon?.open);

> console.log(openinghours?.mon?.open);

- methods

> restaurant.order?.(0, 1) ?? 'Method does not exist';

- arrays

> users[0]?.name ?? 'User array empty';

## PassByValue
JavaScript does not have 'pass by reference'
only allow passing by value

## Higher-order Functions
- receive a function as a parameter
- return new function

## Function.function
- call

> function.call(thisArg, ...any arg array);

- bind
add more defined objects and create a new function

> const bookEW23 = book.bind(eurowings, 23);

## Arrays

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
- `const arrSum = arr.reduce((acc, cur) => acc + cur, 0);`
  - get the sum of all elements
  - acc: accumulator
  - cur: current value
  - 0: initial value
- `const arrMax = arr.reduce((acc, cur) => acc > cur ? acc : cur, arr[0]);`
  - get the maximum value of all elements
