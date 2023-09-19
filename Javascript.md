#JavaScript

## for-of loop
for each item in the array
entries()

> for(const [i, el] of menu.entries()){console.log(`${i+1}: ${el}`);

## ? optional chaining
when you don't know whether it exists, if the part before ? exist, then read the rest part.

- objects

> console.log(openinghours.mon?.open);

> console.log(openinghours?.mon?.open);

- methods

> restaurant.order?.(0, 1) ?? 'Method does not exist';

- arrays

> users[0]?.name ?? 'User array empty';



