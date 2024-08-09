# Props

- Props are used to pass data **from parent to child** components
- Anything can be passed as a prop: strings, numbers, functions, objects, etc.
- Props are **read-only** and **immutable**
  - A component must not modify its own props
  - If you need to modify the data, use **state** instead

## One-way data flow

Data can only be passed from parent to child components via props.

- more predictable and easier to understand
- easier to debug
- more performant

What if we need to pass data from child to parent components?

- Use **callbacks** to pass data from child to parent components
- Use **state** to store data in parent components

## render lists

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

### Destrcuturing props

use `{}` to destructure props

```js
function Item({ itemObj }) {
  return <li>{itemObj}</li>;
}
```

## Props as an API

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

## Prop types

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

## Key prop

What is the key prop?

- A special prop that is used to identify elements
- Must be unique among siblings
- Allow react to destinguish between multiple instances of the same component
- When a key stays the same across renders, the element will be kept in the DOM
- When a key changes, the element will be removed from the DOM and a new element will be created

### Keys in Lists

Suppose there is a list of items, but no key is provided, then when we add a new item to the list, the positions may change, causing the DOM to be re-rendered.
With keys, React can keep track of the items and **only re-render the new item**.

### Keys to Reset State

If we have the same element at the same position, when we need to change the attributes of the element, we can use keys to reset the state of the element.
Without keys, the element will not be re-rendered. For example, suppose the state is false, even we change the content of the component, the state will not be changed since it's seen as the same element.
