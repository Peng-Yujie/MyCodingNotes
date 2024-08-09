# Hooks

Hooks: functions that let you “hook into” React state and lifecycle features from function components.

## Rules of Hooks

- Only call Hooks at the top level.
  - Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components.

## [useState](State.md)

## [useEffect](Effects.md)

## useRef

- create a variable that stays the same between renders
- select and store DOM nodes

## Custom Hooks

for reusing and porting stateful logic between components

- need to use one or more built-in Hooks
- can receive and return any relevant data(`[]`,`{}`)
