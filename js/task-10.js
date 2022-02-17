function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('div#boxes');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');

createBtnRef.addEventListener('click', () => {
  createBoxes(inputRef.value);
});

destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amt) {
  let string = '';
  for (let i = 0; i < amt; i++) {
    string += createBox(i);
  }
  boxesRef.innerHTML = string;
}

function createBox(i) {
  return `<div style="background-color: ${getRandomHexColor()}; 
  height: ${30 + 10 * i}px; width: ${30 + 10 * i}px">
  </div>`;
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
}