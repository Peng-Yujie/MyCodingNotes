'use strict';

const Person = function (firstName, birthYear) {
  // console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const yj = new Person('Yujie', 1993);


const jack = new Person('Jack', 1990);
// console.log(yj, jack);

// prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

// Person.prototype.lastName = '';

// yj.calcAge();
// console.log(yj);
// console.log(Person.prototype);
// console.log(yj.__proto__);
// console.log(yj.__proto__.__proto__); // Object.prototype

// console.dir(Person.prototype.constructor);

// const arr = [3, 2, 2, 3, 42, 1, 12, 5, 234, 9];
// console.log(arr.__proto__);
// console.log(Object.getPrototypeOf(arr));
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  if (this.speed < 5) this.speed = 0;
  else this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
console.log(mercedes);
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
*/

//////////////////////////////
// ES6 Classes

/*
// class experssion
// const PersonCl = class{}

// class declration
class PersonCl {
  // constructor
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name; // _fullName
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // static method inside the class
  static hey() {
    console.log('Hey!');
  }
}

// static method outside
PersonCl.hi = function (name) {
  console.log(`Hi, ${name}`);
}

const jessica = new PersonCl('Jessica Bing', 1996);
jessica.calcAge();
PersonCl.hey();

// Object.create()
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  }
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
*/

/*
console.log(jessica.__proto__ === PersonCl.prototype); // it is still true
PersonCl.prototype.greet = () => {
  console.log('Hi');
}
jessica.greet();
*/

/*
const account = {
  owner: 'Jonas',
  movements: [200, 300, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
}
account.latest = 50;
console.log(account.movements);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    if (this.speed < 5) this.speed = 0;
    else this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(value) {
    this.speed = value * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);