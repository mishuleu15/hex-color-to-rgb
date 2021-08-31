const body = document.querySelector('body');
const btn = document.querySelector('button');
const span = document.querySelector('span');
const colorBtn = document.querySelector('#nav-bar_color');
const rgbBtn = document.querySelector('#nav-bar_rgb');
const hexBtn = document.querySelector('#nav-bar_hex');

let hexColor;

function changeColor() {
  const x = Math.round(0xffffff * Math.random()).toString(16);
  const y = 6 - x.length;
  const z = '000000';
  const z1 = z.substring(0, y);
  const color = z1 + x;
  hexColor = color;
  body.style.backgroundColor = `#${color}`;
  span.textContent = `#${color}`;
}

function hexToRgb() {
  let aRgbHex = hexColor.match(/.{1,2}/g);
  let aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  span.textContent = `rgb(${aRgb})`;
}

function toHexColor() {
  span.textContent = `#${hexColor}`;
}

btn.addEventListener('click', changeColor);
rgbBtn.addEventListener('click', hexToRgb);
hexBtn.addEventListener('click', toHexColor);

// On Load
changeColor();
