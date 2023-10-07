'use strict';

const navbar = document.querySelector('#navbar');

// Scroll Into View
document.querySelector('#nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Modal Window 2.0

const buttons = document.querySelectorAll('button');
const overlay = document.querySelector('.modal-overlay');

buttons.forEach((btn) =>
  btn.addEventListener('click', function (e) {
    const modalName = e.target.classList[0].split('').slice(0, -3).join('');
    document.querySelector(`.${modalName}`).classList.remove('hidden');
    overlay.classList.remove('hidden');

    overlay.addEventListener('click', function () {
      document.querySelector(`.${modalName}`).classList.add('hidden');
      overlay.classList.add('hidden');
    });
  })
);

// Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Reveal Nav
// Reveal Nav
// Reveal Nav

/*
const nav = document.querySelector('#nav');

const revealNav = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const navObserver = new IntersectionObserver(revealNav, {
  root: null,
  threshold: 0.1,
});

navObserver.observe(aboutSection);
*/

// Reveal Nav
// Reveal Nav
// Reveal Nav
