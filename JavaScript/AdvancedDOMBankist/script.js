'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // array

const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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
// Scrolling
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

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('LINK', e.target);
//     const id = this.getAttribute('href'); // get the destination
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // scroll to
//   })
// });

document.querySelector('.nav__links').addEventListener('click', function (e) { // nav__links: parent element
  // console.log(e.target);
  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains('nav__link')) { // target
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabs.forEach(t => t.addEventListener('click', () => { console.log('TAB') }));
tabsContainer.addEventListener('click', (e) => {
  // const clicked = e.target; // it could be a span in tab
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;  // return if nothing is clicked

  // active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // active content area
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5)); // expect a function not a value

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect(); // get the coordinates of the section
// // when scroll the page
// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY); // the distance from the top
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null, // the viewport
//   threshold: [0, 0.2], // 0% or 20% of the target is visible
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
const headerObeserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // 90px before the target
});
headerObeserver.observe(header);

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

// const h1 = document.querySelector('h1');
/*
// going downwards: child
console.log(h1.querySelectorAll('.highlight')); // get by tag
console.log(h1.childNodes);
console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// going upwards
console.log(h1.parentNode);
console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways: siblings
console.log(document.querySelector('h4').previousElementSibling);
console.log(h1.nextElementSibling);

console.log([...h1.parentElement.children]);
// [...h1.parentElement.children].forEach((el) => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
*/

/*
const h1Alert = function (e) {
  alert('addEventListener: Great! Reading the heading');
  // remove
  // h1.removeEventListener('mouseenter', h1Alert);
};
h1.addEventListener('mouseenter', h1Alert);

setTimeout(() => h1.removeEventListener('mouseenter', h1Alert), 3000);

h1.onmouseenter = function (e) {
  alert("Mouse enter");
};

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log(e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
  e.stopPropagation(); // stop bubbling up
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
})

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log(e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
})
*/

