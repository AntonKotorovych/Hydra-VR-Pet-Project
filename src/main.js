const navHamburgerMenu = document.querySelector('.navbar-hamburger-menu');
const navOpenButton = document.querySelector('.navbar-hamburger-button--open');
const navCloseButton = document.querySelector(
  '.navbar-hamburger-button--close'
);

function toggleNavbarButtonsVisibility() {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);

  if (navOpenButton.style.display === 'block') {
    navCloseButton.style.display === 'none';
  } else {
    navCloseButton.style.display === 'block';
  }

  if (screenWidth >= 800) {
    navOpenButton.style.display = 'none';
    navCloseButton.style.display = 'none';
    navHamburgerMenu.style.display = 'none';
  } else {
    if (navCloseButton.style.display === 'none')
      navOpenButton.style.display = 'block';
  }
}

window.addEventListener('resize', toggleNavbarButtonsVisibility);

navOpenButton.addEventListener('click', () => {
  navHamburgerMenu.style.display = 'flex';
  navOpenButton.style.display = 'none';
  navCloseButton.style.display = 'block';
});

navCloseButton.addEventListener('click', () => {
  navHamburgerMenu.style.display = 'none';
  navOpenButton.style.display = 'block';
  navCloseButton.style.display = 'none';
});
