'use strict';

const Person = function (firstName, birthYear) {
  // console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const yj = new Person('Yujie', 1993);


const jack = new Person('Jack', 1990);
console.log(yj, jack);

// prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

yj.calcAge();
console.log(yj);
console.log(yj.__proto__);