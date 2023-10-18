const btnLeftBrands = document.getElementById('btnLeftBrands');
const btnRightBrands = document.getElementById('btnRightBrands');

const unrealEngine = document.getElementById('unrealEngine');
const unity = document.getElementById('unity');
const oculus = document.getElementById('oculus');
const vive = document.getElementById('vive');

let counterBrands = 0;

function changeBrandsView() {
  if (counterBrands === 0) {
    unrealEngine.style.top = '50%';
    unrealEngine.style.left = '50%';
    unrealEngine.style.transform = 'translate(-50%, -50%)';
    unity.style.removeProperty('top');
    unity.style.removeProperty('transform');
    unity.style.left = '110%';
    oculus.style.removeProperty('top');
    oculus.style.removeProperty('transform');
    oculus.style.left = '210%';
    vive.style.removeProperty('top');
    vive.style.removeProperty('transform');
    vive.style.left = '310%';
  } else if (counterBrands === 1) {
    unity.style.top = '50%';
    unity.style.left = '50%';
    unity.style.transform = 'translate(-50%, -50%)';
    unrealEngine.style.removeProperty('top');
    unrealEngine.style.removeProperty('transform');
    unrealEngine.style.left = '-110%';
    oculus.style.removeProperty('top');
    oculus.style.removeProperty('transform');
    oculus.style.left = '110%';
    vive.style.removeProperty('top');
    vive.style.removeProperty('transform');
    vive.style.left = '210%';
  } else if (counterBrands === 2) {
    oculus.style.top = '50%';
    oculus.style.left = '50%';
    oculus.style.transform = 'translate(-50%, -50%)';
    unrealEngine.style.removeProperty('top');
    unrealEngine.style.removeProperty('transform');
    unrealEngine.style.left = '-110%';
    unity.style.removeProperty('top');
    unity.style.removeProperty('transform');
    unity.style.left = '-110%';
    vive.style.removeProperty('top');
    vive.style.removeProperty('transform');
    vive.style.left = '-210%';
  } else if (counterBrands === 3) {
    vive.style.top = '50%';
    vive.style.left = '50%';
    vive.style.transform = 'translate(-50%, -50%)';
    unrealEngine.style.removeProperty('top');
    unrealEngine.style.removeProperty('transform');
    unrealEngine.style.left = '-210%';
    unity.style.removeProperty('top');
    unity.style.removeProperty('transform');
    unity.style.left = '-310%';
    oculus.style.removeProperty('top');
    oculus.style.removeProperty('transform');
    oculus.style.left = '410%';
  }
}

btnRightBrands.addEventListener('click', () => {
  counterBrands = (counterBrands + 1) % 4;
  console.log(counterBrands);
  changeBrandsView();
});

btnLeftBrands.addEventListener('click', () => {
  counterBrands = (counterBrands - 1 + 4) % 4;
  console.log(counterBrands);
  changeBrandsView();
});
