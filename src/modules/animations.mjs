/** @module animations */

const popUpScale = [
  { scale: '0' },
  { scale: '1' }
];

const popUpOpacity = [
  { opacity: '0' },
  { opacity: '1' }
];

const closeScale = [
  { scale: '1' },
  { scale: '0' }
];

const closeOpacity = [
  {opacity: '1'},
  {opacity: '0'}
];

const timing = {
  duration: 250
};

export function startPopUpScaleAnimation(elem) {
  return elem.animate(popUpScale, timing);
}

export function startPopUpOpacityAnimation(elem) {
  return elem.animate(popUpOpacity, timing);
}

export function startClosingScaleAnimation(elem) {
  return elem.animate(closeScale, timing);
}

export function startClosingOpacityAnimation(elem) {
  return elem.animate(closeOpacity, timing);
}
