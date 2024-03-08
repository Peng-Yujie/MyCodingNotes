# Web Design Patterns

- Structural Patterns
  - Module
  - ...
- Creational Patterns
  - Singleton
  - Factory
  - ...
- Architectural Patterns
  - MVC(Model-View-Controller)
  - ...

## Module Pattern

Module pattern is a `structural` pattern used to structure code into cohesive units.
It is very useful for keeping the units of code for a project both cleanly separated and organized.

```js
const countDown = (() => {
  let value = 10;
  const count = () => value--;
  const getValue = () => value;
  return {
    getValue: getValue,
    count: count,
  };
})();
```

## Singleton Pattern

Singleton pattern is a `creational` pattern that ensures a class has only one instance and provides a global point of access to it.

```js
const Connection = (() => {
  let instance;
  const init = () => {
    const connection = "Connected";
    return {
      getConnection: () => connection,
    };
  };
  getInstance = () => {
    if (!instance) {
      instance = init();
    }
    return instance;
  };
  return {
    getInstance: getInstance,
  };
})();

const connection1 = Connection.getInstance();
const connection2 = Connection.getInstance();
console.log(connection1 === connection2); // true
```

## Factory Pattern

Factory pattern is a `creational` pattern that enables the instantiation of objects from a single class interface.

```js
const quadratic = (a, b, c) => (x) => a * x * x + b * x + c;
const args = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const quadratics = [];
args.forEach((arg) => {
  quadratics.push(quadratic(...arg));
});
console.log(quadratics[0](10)); // 1*10*10 + 2*10 + 3 = 123
```

## MVC(Model-View-Controller)

MVC is an `architectural` pattern that allows for the separation of concerns in an application.

```

```

```

```
