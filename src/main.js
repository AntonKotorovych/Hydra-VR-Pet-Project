const navHamburgerMenu = document.querySelector('.navbar-hamburger-menu');
const navOpenButton = document.querySelector('.navbar-hamburger-button--open');
const navCloseButton = document.querySelector('.navbar-hamburger-button--close');
const navBarLinks = document.querySelectorAll("[data-element='nav-bar-link']");

const navHamburgerMenuToggleShow = () => {
  navHamburgerMenu.classList.toggle('navbar-hamburger-menu--open');
  navOpenButton.classList.toggle('navbar-button--show');
  navCloseButton.classList.toggle('navbar-button--show');
};

navBarLinks.forEach(link => link.addEventListener('click', navHamburgerMenuToggleShow));

navOpenButton.addEventListener('click', function () {
  navHamburgerMenuToggleShow();
});

navCloseButton.addEventListener('click', () => {
  navHamburgerMenuToggleShow();
});
