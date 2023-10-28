function createNodeItems(keys) {
  return keys.map(key => {
    return document.getElementById(key);
  });
}

// Main Header Info
const MAIN_HEADER_INFO = createNodeItems(['geolocation', 'call', 'message']);

const btnRightHeaderInfo = document.querySelector('.btn-mobile-header--right');
const btnLeftHeaderInfo = document.querySelector('.btn-mobile-header--left');

// Features
const FEATURES = createNodeItems(['simulation', 'education', 'selfCare', 'outdoor']);

const btnRightFeatures = document.getElementById('btnRightFeatures');
const btnLeftFeatures = document.getElementById('btnLeftFeatures');

// Brand Logos

const BRAND_LOGOS = createNodeItems(['unrealEngine', 'unity', 'oculus', 'vive']);

const btnRightBrands = document.getElementById('btnRightBrands');
const btnLeftBrands = document.getElementById('btnLeftBrands');

// Build Features

const BUILD_FEATURES = createNodeItems(['conceptionDesign', 'interactionDesign', 'vrUserTesting', 'vrDeploy']);

const btnRightBuildFeatures = document.getElementById('btnRightBuildFeatures');
const btnLeftBuildFeatures = document.getElementById('btnLeftBuildFeatures');

let counterMainHeaderInfo = 0;
let counterFeatures = 0;
let counterBrands = 0;
let counterBuildFeatures = 0;

// Reusable Function to change items view

function changeGalleryView(counter, items) {
  const leftValues = [
    ['50%', '150%', '250%', '350%'],
    ['-50%', '50%', '150%', '250%'],
    ['-150%', '-50%', '50%', '150%'],
    ['-250%', '-150%', '-50%', '50%'],
  ];

  if (counter < 0 || counter > 3) {
    return;
  }

  items.forEach((item, index) => {
    item.style.left = leftValues[counter][index];
  });
}

// Main Header Info switch handler

btnRightHeaderInfo.addEventListener('click', () => {
  counterMainHeaderInfo = (counterMainHeaderInfo + 1) % 3;
  changeGalleryView(counterMainHeaderInfo, MAIN_HEADER_INFO);
});

btnLeftHeaderInfo.addEventListener('click', () => {
  counterMainHeaderInfo = (counterMainHeaderInfo - 1 + 3) % 3;
  changeGalleryView(counterMainHeaderInfo, MAIN_HEADER_INFO);
});

// Features switch handler

btnRightFeatures.addEventListener('click', () => {
  counterFeatures = (counterFeatures + 1) % 4;
  changeGalleryView(counterFeatures, FEATURES);
});

btnLeftFeatures.addEventListener('click', () => {
  counterFeatures = (counterFeatures - 1 + 4) % 4;
  changeGalleryView(counterFeatures, FEATURES);
});

// Brands switch handler

btnRightBrands.addEventListener('click', () => {
  counterBrands = (counterBrands + 1) % 4;
  changeGalleryView(counterBrands, BRAND_LOGOS);
});

btnLeftBrands.addEventListener('click', () => {
  counterBrands = (counterBrands - 1 + 4) % 4;
  changeGalleryView(counterBrands, BRAND_LOGOS);
});

// Build Features switch handler

btnRightBuildFeatures.addEventListener('click', () => {
  counterBuildFeatures = (counterBuildFeatures + 1) % 4;
  changeGalleryView(counterBuildFeatures, BUILD_FEATURES);
});

btnLeftBuildFeatures.addEventListener('click', () => {
  counterBuildFeatures = (counterBuildFeatures - 1 + 4) % 4;
  changeGalleryView(counterBuildFeatures, BUILD_FEATURES);
});

// Checking window size for Main Header Info block to avoid bug

let isMobile = window.innerWidth < 800;

function applyMainHeaderStyles() {
  if (isMobile) {
    changeGalleryView(counterMainHeaderInfo, MAIN_HEADER_INFO);
  } else {
    MAIN_HEADER_INFO.forEach(item => (item.style.left = '0%'));
  }
}

function checkWindowSize() {
  const newIsMobile = window.innerWidth < 800;
  if (newIsMobile !== isMobile) {
    isMobile = newIsMobile;
    applyMainHeaderStyles();
  }
}

window.addEventListener('DOMContentLoaded', applyMainHeaderStyles);
window.addEventListener('resize', checkWindowSize);
