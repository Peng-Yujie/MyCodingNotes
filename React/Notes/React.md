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

## State

Data than a component can hold over time. And it can be changed.
With state, we can:

- Update the UI by re-rendering the component
- Respond to user input in forms and events
- Send HTTP requests to remote servers
- Connect to external APIs

### useState

- `useState` is a hook that allows us to add state to functional components
- `useState` returns an array with two elements
  - The first element is the **current state value**
  - The second element is a **function to update the state** value

```js
const [step, setStep] = useState(1); // initial value

function handlePrevious() {
  if (step > 1) setStep(step - 1);
}

function handleNext() {
  if (step < 3) setStep(step + 1);
}
```

### Update state

Don't manually update state. Instead, use the function returned by `useState`.
e.g. `setStep(step + 1)`

### The Mechanics of State in React

- State is stored in the component
- In React, a view is updated by re-rendering the component
- When the state is updated, the component re-renders
- State can only be updated by the component that owns it
- State can be passed to child components via props

### State guidelines

- One component, one state
  - state is isolated to the component that owns it
- UI as a function of state
  - Each state value is a variable
- Use a state for any data that the component needs to track
  - e.g. form data, user input, etc.
- Something need to be dynamic? Use state
  - e.g. show/hide a component, change the color of a button, etc.
- Update state with the function returned by `useState` when we need to change the state
- When building a component, view it as a function of state changing over time
- Don't use state for data that should not trigger a re-render
  - e.g. data that doesn't change over time, data that can be computed from other state values, etc.
