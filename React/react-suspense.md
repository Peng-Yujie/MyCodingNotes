# React Suspense

Native way to support **asynchronous** rendering in a **declarative** way.

What causes a component to be suspending?

- Fetching data
- Loading data

How does it work?

- While rendering, suspending component is found.
- React will go to closest Suspense parent (boundary) and discard already rendered children.
- Display fallback UI.
- After async operation is done, React will re-render the component.

> **Note**:
>
> Components do **NOT** automatically suspend. We need to use libraries like `react-query` or `next.js` to handle data fetching.
