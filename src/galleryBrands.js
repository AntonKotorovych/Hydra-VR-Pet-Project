const btnLeftBrands = document.getElementById('btnLeftBrands');
const btnRightBrands = document.getElementById('btnRightBrands');

const unrealEngine = document.getElementById('unrealEngine');
const unity = document.getElementById('unity');
const oculus = document.getElementById('oculus');
const vive = document.getElementById('vive');

let counterBrands = 0;

function changeBrandsView() {
  if (counterBrands === 0) {
    unrealEngine.style.left = '50%';
    unity.style.left = '150%';
    oculus.style.left = '250%';
    vive.style.left = '350%';
  } else if (counterBrands === 1) {
    unrealEngine.style.left = '-50%';
    unity.style.left = '50%';
    oculus.style.left = '150%';
    vive.style.left = '250%';
  } else if (counterBrands === 2) {
    unrealEngine.style.left = '-150%';
    unity.style.left = '-50%';
    oculus.style.left = '50%';
    vive.style.left = '150%';
  } else if (counterBrands === 3) {
    unrealEngine.style.left = '-250%';
    unity.style.left = '-150%';
    oculus.style.left = '-50%';
    vive.style.left = '50%';
  }
}

btnRightBrands.addEventListener('click', () => {
  counterBrands = (counterBrands + 1) % 4;
  changeBrandsView();
});

btnLeftBrands.addEventListener('click', () => {
  counterBrands = (counterBrands - 1 + 4) % 4;
  changeBrandsView();
});
