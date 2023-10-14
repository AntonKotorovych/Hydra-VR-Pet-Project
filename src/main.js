const navHamburgerMenu = document.querySelector('.navbar-hamburger-menu');
const navOpenButton = document.querySelector('.navbar-hamburger-button--open');
const navCloseButton = document.querySelector('.navbar-hamburger-button--close');

function toggleNavbarButtonsVisibility() {
  const screenWidth = window.innerWidth;
  if (navOpenButton.style.display === 'block') {
    navCloseButton.style.display === 'none';
  } else {
    navCloseButton.style.display === 'block';
  }

  if (screenWidth >= 800) {
    navOpenButton.style.display = 'none';
    navCloseButton.style.display = 'none';
    navHamburgerMenu.classList.toggle('navbar-hamburger-menu--open');
  } else {
    if (navCloseButton.style.display === 'none') navOpenButton.style.display = 'block';
  }
}

window.addEventListener('resize', toggleNavbarButtonsVisibility);

navOpenButton.addEventListener('click', () => {
  navOpenButton.style.display = 'none';
  navCloseButton.style.display = 'block';
  navHamburgerMenu.classList.toggle('navbar-hamburger-menu--open');
});

navCloseButton.addEventListener('click', () => {
  navOpenButton.style.display = 'block';
  navCloseButton.style.display = 'none';
  navHamburgerMenu.classList.toggle('navbar-hamburger-menu--open');
});
