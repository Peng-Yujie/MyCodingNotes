'use strict';

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/


// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours,
  // ES6 enhanced object literals: use same name
  openingHours,
  // : function can be skipped
  // order: function (startIndex, mainIndex) {
  //   return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  // },
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery: function ({ time, address, test = 'default' }) {
    console.log(time, address, test);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient)
  }
};

// String


/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

// convert obj to map, use .entries
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number')
    console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
// 1. get the value of 'correct'
// 2. compare with the answer from user
// 3. return the result through map
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
// Set and Map fundamentals
const orderset = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderset);
console.log(orderset.size);
console.log(orderset.has('Pizza'));
orderset.add('add');
orderset.delete('Pizza');
console.log(orderset.size);

// Convert string to char set
console.log(new Set('console'));
// Convert array to set
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
const staffUnique = new Set(staff);
console.log(staffUnique);
// Convert set to array
const setToArray = [...staffUnique];
console.log(setToArray);

const rest = new Map();
rest
  .set('name', 'Classico Italian')
  .set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon'));
console.log(rest.get(2));
*/


/*
// for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu)
  console.log(item);
for (const item of menu.entries()) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

/*
// Property names
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
// Property values
const values = Object.values(openingHours);
console.log(values);
// Entire objects
const entries = Object.entries(openingHours);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
//Logical assignment
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Rossi",
};

// OR | NULLISH
// rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ??= 10;
rest2.numGuests ||= 10;

// AND
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// AVOID undefined
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);
*/

/*
// Use any data type, return any data type, short-circuiting
// or: return first truthy value
console.log('---OR---');
console.log(3 || 'yyy');
// if the value if undefined, then return a dafault vaule
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//Nullish: ?? only check null and undefined (NOT 0 or '')
//if restaurant.numGuests==0 then return 0
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3);

// and: if one falsy value exists return falsy value, else return last truthy value
console.log('---AND---');
console.log(0 && 'Test');
console.log(2 && 'Test');
console.log(true && 1 && '' && 0 && null && 'P');

restaurant.orderPizza && restaurant.orderPizza('mushroom');
*/


/*
//Destructuring

//Rest: pack elements in the array, must be the last element
const [a, b, ...others] = [1, 2, 3, 4, 5];
//others becomes a new array
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions using rest
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 2, 42);

const x = [23, 4, 14];
add(...x);

restaurant.orderPizza('mushroom');
*/

/*
const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
console.log(ingredients);
//array parameter
restaurant.orderPasta(...ingredients);
*/

/*
//Spread
const arr = [7, 8, 9];
console.log(arr);
console.log(...arr);
const badNewArr = [1, 2, arr[0]];
console.log(badNewArr);

//add an array to a new array: ...arr
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menu);

const str = 'peng';
console.log(...str);

//Objects
const newResto = { foundedIn: 1998, ...restaurant, founder: 'Peng' };
console.log(newResto);

const restoCopy = { ...restaurant };
restoCopy.name = 'New Name';
console.log(restaurant.name);
console.log(restoCopy.name);
*/

/*
///////////////////////////
//Object
restaurant.orderDelivery({
  time: '23:30',
  address: '4266 G st',
  mainIndex: 2,
  startIndex: 2,
});

//create variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//rename the variables
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//Set default by using " = "
const { menu = [], starterMenu: starts = [] } = restaurant;
console.log(menu, starts);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//cannot assign to a block
// { a, b } = obj;
({ a, b } = obj);
console.log(a, b);

//Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);
///////////////////////////
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

};
*/

// Coding Challenge #1
/*
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

//const { team1: team1, x: draw, team2: team2 } = game.odds;
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
const printGoals = function (...players) {
  console.log(`${players.length} goals`);
}
printGoals('Davies', 'Muller');
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team1 is more likely to win');
*/

// Coding Challenge #2
/*
// Let's continue with our football betting app!
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [number, name] of game.scored.entries()) {
  console.log(`Goal ${number + 1}: ${name}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
const properties = Object.values(game.odds);
for (const value of properties) {
  sum += value;
}
console.log(sum / properties.length);
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
const results = Object.entries(game.odds);
for (const [team, odd] of results) {
  let result = team == 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${result}: ${odd}`);
}
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers);

// GOOD LUCK 😀
*/

