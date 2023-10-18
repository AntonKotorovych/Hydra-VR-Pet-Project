const btnLeftFeatures = document.querySelector('.btn-mobile-arrow--left-features');
const btnRightFeatures = document.querySelector('.btn-mobile-arrow--right-features');

console.log(btnLeftFeatures);
console.log(btnRightFeatures);

let simulation = document.getElementById('simulation');
let education = document.getElementById('education');
let selfCare = document.getElementById('selfCare');
let outdoor = document.getElementById('outdoor');

let counterFeatures = 0;

function changeFeaturesView() {
  if (counterFeatures === 0) {
    simulation.style.right = '0%';
    education.style.right = '-120%';
    selfCare.style.right = '-220%';
    outdoor.style.right = '-320%';
  } else if (counterFeatures === 1) {
    simulation.style.right = '120%';
    education.style.right = '0%';
    selfCare.style.right = '-120%';
    outdoor.style.right = '-220%';
  } else if (counterFeatures === 2) {
    simulation.style.right = '220%';
    education.style.right = '120%';
    selfCare.style.right = '0%';
    outdoor.style.right = '-120%';
  } else if (counterFeatures === 3) {
    simulation.style.right = '320%';
    education.style.right = '220%';
    selfCare.style.right = '120%';
    outdoor.style.right = '0%';
  }
}

btnRightFeatures.addEventListener('click', () => {
  counterFeatures = (counterFeatures + 1) % 4;
  changeFeaturesView();
});

btnLeftFeatures.addEventListener('click', () => {
  counterFeatures = (counterFeatures - 1 + 4) % 4;
  changeFeaturesView();
});

// window.addEventListener('resize', () => {
//   if (window.innerWidth > 799) {
//     geolocation.style.removeProperty('right');
//     call.style.removeProperty('right');
//     message.style.removeProperty('right');
//     counter = 0;
//   }
// });
