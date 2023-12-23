# JavaScript

## Function
[Function.md](Notes/Function.md)

## Arrays
[Arrays.md](Notes/Arrays.md)

## DOM
DOM: Document Object Model [DOM.md](Notes/DOM.md)

## Event
[Event.md](Notes/Event.md)

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