const btnLeft = document.querySelector('.btn-mobile-header--left');
const btnRight = document.querySelector('.btn-mobile-header--right');

let geolocation = document.getElementById('geolocation');
let call = document.getElementById('call');
let message = document.getElementById('message');

console.log(geolocation, call, message);

let counter = 0;

btnRight.addEventListener('click', () => {
  counter = (counter + 1) % 3;
  console.log(counter);
});

btnLeft.addEventListener('click', () => {
  counter = (counter - 1 + 3) % 3;

  console.log(counter);
});
