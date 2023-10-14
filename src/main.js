const navHamburgerMenu = document.querySelector('.navbar-hamburger-menu');
const navOpenButton = document.querySelector('.navbar-hamburger-button--open');
const navCloseButton = document.querySelector('.navbar-hamburger-button--close');

navOpenButton.addEventListener('click', function () {
  navOpenButton.classList.toggle('navbar-button--show');
  navCloseButton.classList.toggle('navbar-button--show');
  navHamburgerMenu.classList.toggle('navbar-hamburger-menu--open');
});

navCloseButton.addEventListener('click', () => {
  navCloseButton.classList.toggle('navbar-button--show');
  navOpenButton.classList.toggle('navbar-button--show');
  navHamburgerMenu.classList.toggle('navbar-hamburger-menu--open');
});
