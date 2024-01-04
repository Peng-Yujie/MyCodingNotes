# React

## Overview

React is a JavaScript library for building user interfaces.
**Main features:**

- Declarative
- Component-Based
- Learn Once, Write Anywhere

**Main concepts:**

- Components
- JSX
- Props
- State, Events, and Forms
- Hooks, Refs, and Context

## Components

A component is a piece of the user interface. It can be a button, a form, a dialog, a screen, etc.

- Each component is concerned with one piece of the UI
- Components are reusable and composable
- A component can contain JavaScript, HTML, CSS, and other components

Structure of a component:

- Data
  - **Props**
  - **State**
- Logic
- Appearance: **JSX**

### Create a component

#### function component

- A function that returns a React element
- Only returns a single root element
  - If there are more than one element, wrap them in a div
- Can receive props as an argument

#### class component

- A class that extends React.Component

## JSX

Declarative syntax to describe what components look like and how they work

- components must return a block of JSX
- Extension of JavaScript that allows embedding JavaScript, CSS and React components into HTML
- JSX works like HTML, but we can use JS expressions inside `{}`
  - Expressions are allowed, but statements are not

### JSX vs HTML

- className instead of class
- htmlFor instead of for
- tag names must be capitalized
- use self-closing tags: `<header />` instead of `<header></header>`

### Declarative

- Imperative: How to do things
  - Manual DOM element creation
  - Step by step instructions
- Declarative: What to do
  - Describe the desired result
  - React takes care of the rest
  - Never touch the DOM directly, instead, consider the UI as a function of state

### CSS in Components

- import css file

- inline styles

```js
function Button() {
  const style = {
    backgroundColor: "red",
    color: "white",
  };
  return <button style={style}>Click me</button>;
}
```

### React Fragment

A React component that allows us to return multiple elements without adding extra nodes to the DOM

- `<>` and `</>` are shorthand for `<React.Fragment>` and `</React.Fragment>`

## Props

**Props:** short for properties.

- Props are used to pass data **from parent to child** components
- Anything can be passed as a prop: strings, numbers, functions, objects, etc.
- Props are **read-only** and **immutable**
  - A component must not modify its own props
  - If you need to modify the data, use **state** instead

### One-way data flow

Data can only be passed from parent to child components via props.

- more predictable and easier to understand
- easier to debug
- more performant

What if we need to pass data from child to parent components?

- Use **callbacks** to pass data from child to parent components
- Use **state** to store data in parent components

### render lists

use `map` to render a list of items

```js
// within a component
function List() {
  const items = ["item1", "item2", "item3"];
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

// props
const arr = [1, 2, 3];
function List() {
  return (
    <ul>
      {arr.map((item) => (
        <Item itmeObj={item} />
      ))}
    </ul>
  );
}

function Item(props) {
  return <li>{props.itemObj}</li>;
}
```

#### Destrcuturing props

use `{}` to destructure props

```js
function Item({ itemObj }) {
  return <li>{itemObj}</li>;
}
```
