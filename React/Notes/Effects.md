# Effects

`Effects` allow us to write code that is executed at different moments of the component's lifecycle.

## useEffect

The `useEffect` hook is used to perform **side effects** in a functional component.

```jsx
useEffect(function () {
  fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=cube`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search));
}, []);
```

### 1st argument: `<function>`

execute the side effect

### 2nd argument: `<dependency>`

`useEffect` runs on every render by default.

- Each time one of the dependencies changes, the effect is re-run.
- If you want to run it only once, you can pass an empty array as the second argument(`[]` with no props or state).
