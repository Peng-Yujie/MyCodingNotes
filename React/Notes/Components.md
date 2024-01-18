# Components

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

## Create a component

### function component

- A function that returns a React element
- Only returns a single root element
  - If there are more than one element, wrap them in a div
- Can receive props as an argument

### class component

- A class that extends React.Component

## Component Lifecycle

1. Mount/Initial render
2. Re-render
3. Unmount

## Splitting Components

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

### How to split a UI into components

- Logical separation of content/layout
- Reusability
- Responsibility
- Coding style

### When to create a new component

- When a part of the UI is complex:
  - Contains pieces of content or layout that are logically separated
- When a part of the UI repeats:
  - Same layout, different content
  - Same content, different layout
- When a part of the UI is responsible for a single thing
- When a part of the UI is independent

### Naming components

- Use descriptive names
- According to what it does or what it displays

### Component categories

- Stateless/Presentational components
  - No state
  - Can receive props
  - Usually small and reusable
- Stateful/Container components
  - Contains state
  - Usually large and complex
  - Usually not reusable
- Structural components
  - For layout purposes
  - Can be huge and not reusable

### Component composition

- Components can be composed of other components
- Pass a component as a prop to another component

```js
function Modal({ children }) {
  return <div className="modal">{children}</div>;
}

function Error() {
  return <p>Error!</p>;
}

function App() {
  return (
    <Modal>
      <Error />
    </Modal>
  );
}
```

### Create a reusable component

- Find the common parts of the UI
