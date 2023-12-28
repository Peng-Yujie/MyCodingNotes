# Object Oriented Programming in JavaScript

## The main idea of OOP
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## OOP in JavaScript
- class
  - constructor
  - properties
  - methods
  - static methods
  - getters and setters
- object
  - instance of a class
  - access properties and methods
- inheritance
  - constructor function
  - ES6 classes
  - Object.create()
- static methods
- polymorphism
  - method overriding
  - method overloading

## Constructor function
Define the class with a constructor function.
```js
function Person(name, age) {
  this.name = name; // property
  this.age = age;
  this.sayName = function() { // method
    console.log(this.name);
  }
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

**Note:** Methods in the constructor, but **not recommended**. A better way is to add methods to the prototype.

### Prototypes
The prototype is an object that is shared among all instances of the constructor function.

**Note:** The prototype is not the prototype of the constructor function, but the prototype of the instances created by the constructor function.
- `__proto__` always points to the prototype of the constructor function
- `Person.prototype === john.__proto__` // true
- `Person.prototype.isPrototypeOf(john)` // true
- In modern JS, `Object.getPrototypeOf(john) === Person.prototype` // true

#### Prototype chain
Definition: The prototype chain is the mechanism by which JavaScript objects inherit features from one another.
- object -> prototype -> prototype -> ...
- `john` -> `Person.prototype` -> `Object.prototype` -> `null`
  - `john.__proto` === `Person.prototype`
  - `john.__proto.__proto` === `Person.prototype.__proto__` === `Object.prototype`

#### Properties
The properties of the prototype are shared among all instances of the constructor function.
But no instance of the constructor function has the property, the property is only accessible through the prototype.
```js
Person.prototype.address = '123 Main St';
john.address; // 123 Main St
john.hasOwnProperty('address'); // false
```

#### Methods
Adding methods to the prototype is better than adding methods to the constructor, because the methods are shared among all instances of the constructor function, and the methods are not recreated for each instance.
```js
Person.prototype.sayName = function() {
  console.log(this.name);
}
const john = new Person('John', 23);
john.sayName(); // John
```

## ES6 classes
Modern JS introduced the `class` keyword to make it easier to create constructor functions and prototype inheritance.
- must have a `constructor` method
- can have methods in the class body
- can also have prototype methods: `Person.prototype.sayName = function() {...}`
- classes are NOT hoisted: must be declared before use
- classes are first-class citizens: can be passed to functions and returned from functions
- classes are executed in strict mode: `use strict`

```js
// declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// expression
const Person = class {
  // ...
}
```

### Constructor
for creating and initializing an object created with a class

### Getters and setters
for accessing and mutating properties of an object
- constructor: `constructor(name, age) {...}`
- getter: `get propertyName() {...}`
- setter: `set propertyName(value) {...}`

**Note:**
use `_` before the property name to avoid naming conflicts between the property and the getter/setter
```js
class Person {
  // ...
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
}
```

## Object.create()
The easiest and most straightforward way to create an object with a specific prototype is to use the `Object.create()` method.
However, this method is not widely used in practice, because it is not easy to understand.

```js
const personProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  }
}
const john = Object.create(personProto);
john.name = 'John';
john.birthYear = 1990;
john.calcAge(); // 30
```

## Inheritance between classes
A class can inherit from another class.

### Inheritance between constructor functions

```js
const Student = function(name, age, studentId) {
  // Person(name, age); // this does not work because the `this` keyword is not set
  Person.call(this, name, age); // call the parent constructor
  this.studentId = studentId;
}

// link prototypes
Student.prototype = Object.create(Person.prototype);
const john = new Student('John', 23, 123);
john.__proto__ === Student.prototype; // true
john.__proto__.__proto__ === Person.prototype; // true

// override methods
Student.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}

```
- **Linking prototypes** when using constructor functions

### Inheritance between classes
**(The most common way to use inheritance in modern JS)**

```js
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // invoke the parent constructor
    this.studentId = studentId;
  }
  // override methods
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}
```
- When using classes, the prototype is automatically linked
- In constructor, `super()` must be called before `this`

### Inheritance between classes: Object.create()

```js
const PersonProto = {
  init(name, age) {
    this.name = name;
    this.age = age;
  },
  hi(){
    console.log(`Hi, I am ${this.name}`);
  }
}
// link prototypes
const StudentProto = Object.create(PersonProto);
StudentProto.init = function(name, age, studentId) {
  PersonProto.init.call(this, name, age); // call the parent method
  this.studentId = studentId;
}
// override methods
StudentProto.hi = function() {
  console.log(`Hi, I am ${this.name}, and I am a student`);
}
// create object
const john = Object.create(StudentProto); 
```

- use `Object.create()` to create a child class(prototype)
- then, use `Object.create()` to create an object from that prototype

## Static methods
The methods are called on the class itself, not on the instances of the class.
- `Array.from()` // static method
- `[1, 2, 3].map()` // instance method

```js
// outside the class
Person.hey = function() {
  console.log('Hey');
}
// inside the class
class Person {
  // ...
  static hey() {
    console.log('Hey');
  }
}
```

## Encapsulation
- public: accessible from outside the class
- private: only accessible from inside the class
- protected: accessible from inside the class and from the child class

### Protected
use `_` before the property name to indicate that the property is protected, but is not truly private.

```js
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
}
const john = new Person('John', 23);
john.name; // undefined
john._name; // John, we can still access the property
```

### Private
use `#` before the property name to indicate that the property is private.

```js
class Account {
  // 1) Public fields
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // 4) Private methods
  #approveLoan(val) { // not widely supported
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
// acc1.#movements.push(100); // error
console.log(acc1.getMovements());
console.log(acc1);
```