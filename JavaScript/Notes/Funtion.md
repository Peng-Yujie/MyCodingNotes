# Function

## Higher-order Functions

- receive a function as a parameter
- return new function

- call
  `function.call(thisArg, ...any arg array);`

- **bind**
  add more defined objects and create a new function
  `const bookEW23 = book.bind(eurowings, 23);`

Consider the following example:

```js
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this; // this is the opacity
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5)); // bind returns a new function and pass 0.5 as this
```

## [Callback Functions](Callback.md)
