# Object Oriented Programming in JavaScript

## The main idea of OOP
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## OOP in JavaScript
- class -> constructor function
- instance -> object
- inheritance -> prototype inheritance/delegation
  - The prototype contains the methods (functions) and properties (variables) that are shared by all instances of the object.
  - **Delegation:** Behavior is delegated to the prototype object.
- polymorphism -> duck typing

### Prototypal inheritance in JavaScript

#### Constructor function
An object is an instance of a constructor function.
```js
function Person(name, age) {
  this.name = name; // property
  this.age = age;
}
const john = new Person('John', 23);
john instanceof Person; // true

const jane = 'Jane';
jane instanceof Person; // false
```
1. A new empty object is created
2. The constructor function is called with the new object as its this binding
3. The new object is linked to a prototype object
4. The new object is returned

Methods in the constructor, but **not recommended**. A better way is to add methods to the prototype.
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name);
  }
}
const john = new Person('John', 23);
john.sayName(); // John
```

#### Prototypes
The prototype is an object that is shared among all instances of the constructor function.

**Note:** The prototype is not the prototype of the constructor function, but the prototype of the instances created by the constructor function.
- `Person.prototype === john.__proto__` // true
- `Person.prototype.isPrototypeOf(john)` // true

##### Methods
Adding methods to the prototype is better than adding methods to the constructor, because the methods are shared among all instances of the constructor function, and the methods are not recreated for each instance.
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function() {
  console.log(this.name);
}
const john = new Person('John', 23);
john.sayName(); // John
```

##### Properties
The properties of the prototype are shared among all instances of the constructor function.
But no instance of the constructor function has the property, the property is only accessible through the prototype.
```js
Person.prototype.address = '123 Main St';
john.address; // 123 Main St
john.hasOwnProperty('address'); // false
```

#### ES6 classes
Modern JS introduced the `class` keyword to make it easier to create constructor functions and prototype inheritance.

#### Object.create()
The easiest and most straightforward way to create an object with a specific prototype is to use the `Object.create()` method.

