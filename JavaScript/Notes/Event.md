# Event

## preventDefault
e.preventDefault() prevents the default behavior of the event
- `default behavior`: for example, submit button will submit the form, a link will redirect to the link

## addEventListener
- `element.addEventListener('event', function);`
  - event: click, keydown, keyup, keypress, submit, load, DOMContentLoaded
  - function: the function to be executed when the event occurs
- `element.onEvent = function;`
  - event: click, keydown, keyup, keypress, submit, load, DOMContentLoaded
  - function: the function to be executed when the event occurs
  - it can only be used for one event

## removeEventListener
it can remove the event listener, but it has to be a **named function**
```js
const h1Alert = function(e){
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', h1Alert);
};
h1.addEventListener('mouseenter', h1Alert);
```

## setTimeout
- `setTimeout(function, time);`
  - function: the function to be executed after the time
  - time: the time in milliseconds: `1000` = 1 second

## Capture and Bubbling
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

## Event Propagation
- When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
- `e.stopPropagation()`: stop the event from bubbling up

## Event Delegation
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
