const btnLeft = document.querySelector('.btn-mobile-header--left');
const btnRight = document.querySelector('.btn-mobile-header--right');

let geolocation = document.getElementById('geolocation');
let call = document.getElementById('call');
let message = document.getElementById('message');

let counterHeader = 0;

function changeInfoView() {
  if (counterHeader === 0) {
    geolocation.style.right = '16%';
    call.style.right = '-84%';
    message.style.right = '-184%';
  } else if (counterHeader === 1) {
    geolocation.style.right = '116%';
    call.style.right = '16%';
    message.style.right = '-84%';
  } else if (counterHeader === 2) {
    geolocation.style.right = '216%';
    call.style.right = '116%';
    message.style.right = '16%';
  }
}

btnRight.addEventListener('click', () => {
  counterHeader = (counterHeader + 1) % 3;
  changeInfoView();
});

btnLeft.addEventListener('click', () => {
  counterHeader = (counterHeader - 1 + 3) % 3;
  changeInfoView();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 799) {
    geolocation.style.removeProperty('right');
    call.style.removeProperty('right');
    message.style.removeProperty('right');
    counterHeader = 0;
  }
});
