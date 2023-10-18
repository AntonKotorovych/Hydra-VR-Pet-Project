const btnLeft = document.querySelector('.btn-mobile-header--left');
const btnRight = document.querySelector('.btn-mobile-header--right');

let geolocation = document.getElementById('geolocation');
let call = document.getElementById('call');
let message = document.getElementById('message');

let counter = 0;

function changeInfoView() {
  if (counter === 0) {
    geolocation.style.right = '16%';
    call.style.right = '-116%';
    message.style.right = '-216%';
  } else if (counter === 1) {
    geolocation.style.right = '116%';
    call.style.right = '16%';
    message.style.right = '-116%';
  } else if (counter === 2) {
    geolocation.style.right = '216%';
    call.style.right = '116%';
    message.style.right = '16%';
  }
}

btnRight.addEventListener('click', () => {
  counter = (counter + 1) % 3;
  console.log(counter);
  changeInfoView();
});

btnLeft.addEventListener('click', () => {
  counter = (counter - 1 + 3) % 3;
  changeInfoView();
  console.log(counter);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 799) {
    geolocation.style.removeProperty('right');
    call.style.removeProperty('right');
    message.style.removeProperty('right');
    counter = 0;
  }
});
