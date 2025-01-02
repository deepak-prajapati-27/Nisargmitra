// Select elements
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');

// Toggle navigation menu
hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});
