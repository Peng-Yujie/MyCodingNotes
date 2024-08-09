# useReducer

## State Management

`useReducer` can be helpful in managing state in the following scenarios:

- When component has a lot of state variables and complex state transitions
- When multiple state updates at the same time
- State depends on one of more other states

### State with `useReducer`

Store related pieces of state in a **state object**.
**Reducer**: function containing all the logic to update the state based on the action type. Reducer takes current state and action as arguments and returns the new state.

> Action: object with a type property that specifies how to update the state.
> Dispatch: sends the action to the reducer.

## How it works

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Dispatch an action
const increment = () => dispatch({ type: "increment", payload: 1 });
//...
```

- `state`: current state
- `dispatch`: function to send actions to the reducer
  - type: name of the action
  - payload: data to update the state
- `reducer`: function that updates the state based on the action type
- `initialState`: initial state

`dispatch` sends an action to `reducer`, and `reducer` returns the new state, which re-renders the component.
