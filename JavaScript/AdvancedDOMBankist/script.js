'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // array

const openModal = function (e) {
  e.preventDefault(); // avoid jumping to the top
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });

});


/////////////////////////////////////////

/*
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const sec1 = document.getElementById('section--1');
console.log(sec1);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
const message = document.createElement('div'); // create
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';

// header.prepend(message); // insert message as the first child
header.append(message); // last one
// header.before(message);
// header.after(message);

// Delete
document.querySelector('.btn--close--cookie').addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor); // can print the inline styles
console.log(getComputedStyle(message).height); // get everything

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(message.style.height);

document.documentElement.style.setProperty('--color-primary', 'orangered');


// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute path
console.log(link.getAttribute('href')); // relative path

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
*/

// events
const h1 = document.querySelector('h1');

const h1Alert = function (e) {
  alert('addEventListener: Great! Reading the heading');
  // remove
  // h1.removeEventListener('mouseenter', h1Alert);
};
h1.addEventListener('mouseenter', h1Alert);

setTimeout(() => h1.removeEventListener('mouseenter', h1Alert), 3000);

// h1.onmouseenter = function (e) {
//   alert("Mouse enter");
// };