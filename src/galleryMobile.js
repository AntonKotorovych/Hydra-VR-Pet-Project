const btnLeftFeatures = document.querySelector('.btn-mobile-arrow--left-features');
const btnRightFeatures = document.querySelector('.btn-mobile-arrow--right-features');

const simulation = document.getElementById('simulation');
const education = document.getElementById('education');
const selfCare = document.getElementById('selfCare');
const outdoor = document.getElementById('outdoor');

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
