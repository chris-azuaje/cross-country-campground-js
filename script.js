'use strict';

// ---- Scroll to top of page ----
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// ---- Scroll Into View ----
const navbar = document.querySelector('#navbar');

document.querySelector('#nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// ---- Reveal Sections ----
const sections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// ---- Modal Functionality ----
const buttons = document.querySelectorAll('button');
const overlay = document.querySelector('.modal-overlay');
const exitBtn = document.querySelectorAll('.exitBtn');

buttons.forEach((btn) =>
  btn.addEventListener('click', function (e) {
    // Modal Appears
    const modalName = e.target.classList[0].split('').slice(0, -3).join('');
    document.querySelector(`.${modalName}`).classList.remove('hidden');
    overlay.classList.remove('hidden');

    // Remove Modal via overlay
    overlay.addEventListener('click', function () {
      document.querySelector(`.${modalName}`).classList.add('hidden');
      overlay.classList.add('hidden');
    });

    // Remove Modal via exit button
    exitBtn.forEach(function (e) {
      e.addEventListener('click', function () {
        document.querySelector(`.${modalName}`).classList.add('hidden');
        overlay.classList.add('hidden');
      });
    });
  })
);

// ---- Calendar ----
const daysTag = document.querySelector('.days'),
  currentDate = document.querySelector('.current-date'),
  prevNextIcon = document.querySelectorAll('.icons span');
// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
// storing full name of all months in array
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = '';
  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? 'active'
        : '';
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
};
renderCalendar();
prevNextIcon.forEach((icon) => {
  // getting prev and next icons
  icon.addEventListener('click', () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
  });
});

// ---- Reveal Nav ----

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
