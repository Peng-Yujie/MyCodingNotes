# React

## Overview

React is a JavaScript **library** for building user interfaces.

- React is **not** a framework

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

### Props as an API

- Component creators define the API, then component users use it
- Abstraction that encapsulates implementation details
- Why?
  - Too many props make components hard to use, too few props make components hard to reuse
  - Need to find a balance between flexibility and usability
- How?
  - Define the API
  - Document the API
  - Use default props
  - Use prop types

### Prop types

PropType is a property that we can add to a component to define the type of each prop.

1. import `prop-types`: `import PropTypes from 'prop-types';`
2. add `propTypes` to the component:

```js
ComponentName.propTypes = {
  propName: PropTypes.type,
};
```

3. after we define the prop types, we must pass the correct type of data to the component, otherwise, we will get a warning in the console

**TODO: TypeScript**

### Key prop

What is the key prop?

- A special prop that is used to identify elements
- Must be unique among siblings
- Allow react to destinguish between multiple instances of the same component
- When a key stays the same across renders, the element will be kept in the DOM
- When a key changes, the element will be removed from the DOM and a new element will be created

#### Keys in Lists

Suppose there is a list of items, but no key is provided, then when we add a new item to the list, the positions may change, causing the DOM to be re-rendered.
With keys, React can keep track of the items and **only re-render the new item**.

#### Keys to Reset State

If we have the same element at the same position, when we need to change the attributes of the element, we can use keys to reset the state of the element.
Without keys, the element will not be re-rendered. For example, suppose the state is false, even we change the content of the component, the state will not be changed since it's seen as the same element.

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

### State vs Props

- State is internal and controlled by the component itself, while props are external and controlled by whatever renders the component
- State can be changed by the component itself, while props is read-only
- Updating state triggers a re-render, while updating props doesn't
- State is used to make components interactive, while props are used to pass data from parent to child components

### Reset state

The state will only change after the component is re-rendered.

```js
function handleReset() {
  // suppose step is 1 now
  setStep(0);
  console.log(step); // 1
}
// After the component is re-rendered, step will be 0

function handleTripleInc() {
  setLikes(likes + 1);
  setLikes(likes + 1);
  setLikes(likes + 1);
}
// calling this fn will only increase likes by 1, because the state is not updated immediately
function handleTripleInc2() {
  setLikes((likes) => likes + 1);
  setLikes((likes) => likes + 1);
  setLikes((likes) => likes + 1);
}
// passing a callback fn to setLikes will increase likes by 3
```

## How React Works behind the Scenes

- Components are just functions
- Create a component instance
  - An instance is a copy of the component, with its own state and props
- Return a React element
- React takes the element and renders it to the DOM
  - What is rendered to the DOM is not a component, but a React element

When use `<Component />`, it returns the React element, the type of this element is the component itself.
But if we call `Component()`, it returns the React element, the type of this element is the return value of the component.

How are components displayed on the screen?

- Render is triggered by state changes
  - Initial render
  - State update(re-render)
- [Render phase](#render-phase)
  - React calls the component function
  - The component function returns a React element
  - React compares the new element with the previous one
  - React updates the DOM with the new element
- [Commit phase](#commit-phase)
  - React writes to the DOM
  - React updates, adds, or removes DOM nodes
- Browser paints the screen

### Render phase

- React calls the component function
- The component function returns a React element
  - Virtual DOM Tree: Tree of all React elements from all instances
  - Every time a component is rendered, a **new virtual DOM tree** is created
  - Rendering a component will render all its children(no matter if they are rendered or not)
- Update fiber tree
  - A new virtual DOM tree will cause **Reconciliation**, which is a process of deciding what has changed in the DOM
    - **[Reconcilor: Fiber](#fiber)**
- [Update the DOM](#commit-phase)

#### Fiber

Fiber is a data structure that represents a component instance:

- Current state
- Props
- Side effects
- Used hooks
- **Queue of work**

Fiber tree: Tree of all fibers from all instances

### Commit phase

- React writes to the DOM: insert, update, or remove DOM nodes
- committing is synchronous (but rendering is asynchronous)
- after the commit phase, the **WIP fiber tree** becomes the current fiber tree
- **Browser Paint**: update the screen

### How does Diffing work?

1. Same position, different element:
   - Update the DOM node
   - Update the fiber
2. Same element, same position:
   - Element will be kept, including state
   - New props/attributes will be applied

## Events

### Events in React VS JavaScript

- Attributes for event handlers are written in camelCase(`onClick` instead of `onclick`)
- Default behavior can not be prevented with `return false`
  - Use `event.preventDefault()`
- Attach `Capture` if you need to handle during capture phase
  - `onClickCapture`
