// Main Header Info

const geolocation = document.getElementById('geolocation');
const call = document.getElementById('call');
const message = document.getElementById('message');

const btnRightHeaderInfo = document.querySelector('.btn-mobile-header--right');
const btnLeftHeaderInfo = document.querySelector('.btn-mobile-header--left');

// Features
const simulation = document.getElementById('simulation');
const education = document.getElementById('education');
const selfCare = document.getElementById('selfCare');
const outdoor = document.getElementById('outdoor');

const btnRightFeatures = document.getElementById('btnRightFeatures');
const btnLeftFeatures = document.getElementById('btnLeftFeatures');

// Brand Logos

const unrealEngine = document.getElementById('unrealEngine');
const unity = document.getElementById('unity');
const oculus = document.getElementById('oculus');
const vive = document.getElementById('vive');

const btnRightBrands = document.getElementById('btnRightBrands');
const btnLeftBrands = document.getElementById('btnLeftBrands');

// Build Features

const conceptionDesign = document.getElementById('conceptionDesign');
const interactionDesign = document.getElementById('interactionDesign');
const vrUserTesting = document.getElementById('vrUserTesting');
const vrDeploy = document.getElementById('vrDeploy');

const btnRightBuildFeatures = document.getElementById('btnRightBuildFeatures');
const btnLeftBuildFeatures = document.getElementById('btnLeftBuildFeatures');

let counterMainHeaderInfo = 0;
let counterFeatures = 0;
let counterBrands = 0;
let counterBuildFeatures = 0;

function changeGalleryView(counter, item1, item2, item3, item4) {
  if (counter === 0) {
    item1.style.left = '50%';
    item2.style.left = '150%';
    item3.style.left = '250%';
    item4.style.left = '350%';
  } else if (counter === 1) {
    item1.style.left = '-50%';
    item2.style.left = '50%';
    item3.style.left = '150%';
    item4.style.left = '250%';
  } else if (counter === 2) {
    item1.style.left = '-150%';
    item2.style.left = '-50%';
    item3.style.left = '50%';
    item4.style.left = '150%';
  } else if (counter === 3) {
    item1.style.left = '-250%';
    item2.style.left = '-150%';
    item3.style.left = '-50%';
    item4.style.left = '50%';
  }
}

// Main Header Info switch handler

btnRightHeaderInfo.addEventListener('click', () => {
  counterMainHeaderInfo = (counterMainHeaderInfo + 1) % 3;
  changeGalleryView(counterMainHeaderInfo, geolocation, call, message);
  console.log('lol');
});

btnLeftHeaderInfo.addEventListener('click', () => {
  counterMainHeaderInfo = (counterMainHeaderInfo - 1 + 3) % 3;
  changeGalleryView(counterMainHeaderInfo, geolocation, call, message);
  console.log('rofl');
});

// Features switch handler

btnRightFeatures.addEventListener('click', () => {
  counterFeatures = (counterFeatures + 1) % 4;
  changeGalleryView(counterFeatures, simulation, education, selfCare, outdoor);
});

btnLeftFeatures.addEventListener('click', () => {
  counterFeatures = (counterFeatures - 1 + 4) % 4;
  changeGalleryView(counterFeatures, simulation, education, selfCare, outdoor);
});

// Brands switch handler

btnRightBrands.addEventListener('click', () => {
  counterBrands = (counterBrands + 1) % 4;
  changeGalleryView(counterBrands, unrealEngine, unity, oculus, vive);
});

btnLeftBrands.addEventListener('click', () => {
  counterBrands = (counterBrands - 1 + 4) % 4;
  changeGalleryView(counterBrands, unrealEngine, unity, oculus, vive);
});

// Build Features switch handler

btnRightBuildFeatures.addEventListener('click', () => {
  counterBuildFeatures = (counterBuildFeatures + 1) % 4;
  changeGalleryView(counterBuildFeatures, conceptionDesign, interactionDesign, vrUserTesting, vrDeploy);
});

btnLeftBuildFeatures.addEventListener('click', () => {
  counterBuildFeatures = (counterBuildFeatures - 1 + 4) % 4;
  changeGalleryView(counterBuildFeatures, conceptionDesign, interactionDesign, vrUserTesting, vrDeploy);
});
