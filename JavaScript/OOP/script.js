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