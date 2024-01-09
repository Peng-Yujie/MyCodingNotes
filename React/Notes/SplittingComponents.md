# Splitting Components

[Components](React.md#components)

## How to split a UI into components

- Logical separation of content/layout
- Reusability
- Responsibility
- Coding style

## When to create a new component

- When a part of the UI is complex:
  - Contains pieces of content or layout that are logically separated
- When a part of the UI repeats:
  - Same layout, different content
  - Same content, different layout
- When a part of the UI is responsible for a single thing
- When a part of the UI is independent

## Naming components

- Use descriptive names
- According to what it does or what it displays

## Component categories

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

## Component composition

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

## Create a reusable component

- Find the common parts of the UI
