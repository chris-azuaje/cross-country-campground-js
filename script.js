const navbar = document.querySelector('#navbar');
const aboutBtn = document.querySelector('#aboutBtn');
const aboutSection = document.querySelector('#about');
const activitiesBtn = document.querySelector('#activitiesBtn');
const activitiesSection = document.querySelector('#activities');
const servicesBtn = document.querySelector('#servicesBtn');
const servicesSection = document.querySelector('#services');
const contactUsBtn = document.querySelector('#contactUsBtn');
const contactUsSection = document.querySelector('#contact-us');

// Scroll Into View
aboutBtn.addEventListener('click', function () {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

activitiesBtn.addEventListener('click', function () {
  activitiesSection.scrollIntoView({ behavior: 'smooth' });
});

servicesBtn.addEventListener('click', function () {
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});

contactUsBtn.addEventListener('click', function () {
  contactUsSection.scrollIntoView({ behavior: 'smooth' });
});

// Modal Window
const overlay = document.querySelector('.modal-overlay');
const rulesModal = document.querySelector('.rules');
const rulesButton = document.querySelector('.rulesBtn');
const ratesModal = document.querySelector('.rates');
const ratesButton = document.querySelector('.ratesBtn');
const galleryModal = document.querySelector('.gallery');
const galleryButton = document.querySelector('.galleryBtn');

rulesButton.addEventListener('click', function () {
  rulesModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

ratesButton.addEventListener('click', function () {
  ratesModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

galleryButton.addEventListener('click', function () {
  galleryModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', function () {
  ratesModal.classList.add('hidden');
  rulesModal.classList.add('hidden');
  galleryModal.classList.add('hidden');
  overlay.classList.add('hidden');
});
