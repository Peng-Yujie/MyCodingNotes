'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
const renderCountry = function (data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function (country) {
  // AJAX call country
  const request = new XMLHttpRequest();
  request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
  request.send();
  // console.log(request.responseText); // nothing

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // get neighbour country 2
    const [neighbour] = data.borders;
    if (!neighbour) return;
    // AJAX call 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
}

getCountryAndNeighbour('Korea (Republic of)');
*/

///////////////////////////////////////
// Promise

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

      return response.json();
    });
}

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`) // fetch return promise
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     }) // return promise
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`); // return a new promise
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`${err}`);
//       renderError(`Something went wrong 🥲 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

const getCountryData = function (country) {
  getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');
      // Country 2
      return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err}`);
      renderError(`Something went wrong 🥲 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('japan');
// });


///////////////////////////////////////
// Coding challenge #1
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error(`Something went wrong (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(`${data.country}`);
    })
    .catch(err => console.log(`${err}`));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

// Event loop
/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 9999999999; i++) { }
//   console.log(res);
// });
console.log('Test end');
*/

// Build a Promise
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
*/

// Promisifying setTimeout
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2).then(() => {
  console.log('Waited for 2 seconds');
  return wait(1);
}).then(() => console.log('Waited for 1 seconds'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('error')).then(x => console.error(x));


// Promisifying the Geolocation API


const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position), err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject); // same as aboved
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition().then(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  }).then(response => {
    if (!response.ok) throw new Error(`Something went wrong (${response.status})`);
    return response.json();
  })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(`${data.country}`);
    })
    .catch(err => console.log(`${err}`));
};

// btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    })
  });
};

let curImg;
createImage('img/img-1.jpg')
  .then(img => {
    curImg = img;
    console.log('img 1 loaded');
    return wait(2); // doesn't have any value
  })
  .then(() => {
    curImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    curImg = img;
    console.log('img 2 loaded');
    return wait(2);
  })
  .then(() => {
    curImg.style.display = 'none';
  })
  .catch(err => console.error(err));
  */

///////////////////////////////////////
// Async/Await
// Error handling: Try...Catch

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // country data
    const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`);
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err}`);
    renderError(`${err.message}`);

    // reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`)
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();
*/

// running promises in parallel
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`);
//     // const [data2] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`);
//     // const [data3] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`)
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('canada', 'usa', 'china');

(async function () {
  const res = await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/canada`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/china`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/usa`)
  ]);
  console.log(res[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request tool too long!'));
    }, s * 1000);
  });
};

Promise.race([
  getJSON(`https://countries-api-836d.onrender.com/countries/name/canada`),
  timeout(0.15)
]).then(res => console.log(res[0])).catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  // Promise.resolve('Success'),
  // Promise.resolve('Another Success'),
  Promise.reject('Error1'),
  Promise.reject('Error2'),
  Promise.reject('Error3'),
  Promise.reject('Error4'),
]).then(res => console.log(res)).catch(err => console.error(err));
// Promise.any
Promise.any([
  Promise.reject('Error1'),
  Promise.reject('Error2'),
  Promise.reject('Error3'),
  Promise.reject('Error4'),
  Promise.resolve('Success'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res)).catch(err => console.error(err));
