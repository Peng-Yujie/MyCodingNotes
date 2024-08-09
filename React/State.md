# State

## useState

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

## Update state

Don't manually update state. Instead, use the function returned by `useState`.
e.g. `setStep(step + 1)`

## The Mechanics of State in React

- State is stored in the component
- In React, a view is updated by re-rendering the component
- When the state is updated, the component re-renders
- State can only be updated by the component that owns it
- State can be passed to child components via props

## State guidelines

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

## State vs [Props](Props.md)

- State is internal and controlled by the component itself, while props are external and controlled by whatever renders the component
- State can be changed by the component itself, while props is read-only
- Updating state triggers a re-render, while updating props doesn't
- State is used to make components interactive, while props are used to pass data from parent to child components

## Reset state

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
