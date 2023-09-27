'use strict';

// Pass by value
/*
const bookings = [];
// default values
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // numPassengers ??= 1;
  // price ??= 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 900);

const flight = 'LH123';
const peng = {
  name: 'Yj Peng',
  passport: 12345678
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport == 12345678) {
    alert('Check in');
  } else {
    alert('Wrong number');
  }
}

checkIn(flight, peng);
console.log(flight);
console.log(peng);

const newPassport = function (person) {
  person.passport = Math.floor(Math.random() * 100000000);
}
newPassport(peng);
checkIn(flight, peng);
console.log(flight);
console.log(peng);
*/

// Higher-order Functions
// receive another function
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
*/

// Return a function
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

// Arrow function
// const greet = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greet('Hey');
greetHey('Peng');
greet('Hi,')('Peng');
*/

// [this]
/*
const lufthansa = {
  airline: 'Lufthanse',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  }
}

lufthansa.book(239, 'Yj Peng');
lufthansa.book(635, 'Ec Wang');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

const book = lufthansa.book;

// book.call(eurowings, 888, 'Jonas');
// console.log(eurowings);

const info = [888, 'Jonas'];
book.call(eurowings, ...info);
console.log(eurowings);

// Bind method: connect to one or more objects and create a new function
const bookEW = book.bind(eurowings);
bookEW(2323, 'Steven');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Peng');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 2000));

const addVAT = addTax.bind(null, 0.23);// Because addTax is an arrow function, there's no this

console.log(addVAT(1000));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(1000));