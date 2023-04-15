// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const divBoxesEl = document.getElementById('boxes')
// const inputEl = document.querySelector('input');


// createBtn.addEventListener('click', () => createBoxes(Number(inputEl.value)))

// function createBoxes(amount) {

//   if (!amount) {
//     return false;
//   }

//   const childElementCount = divBoxesEl.childElementCount;
//   const divGroup = [];

//   for (let i = childElementCount; i < amount + childElementCount; i += 1) {

//     let num = i * 10 + 30;
//     const divStr = `<div style="width: ${num}px; height: ${num}px; background-color: ${getRandomHexColor()};">div</div>`
//     divGroup.push(divStr);

//   }

//   divBoxesEl.insertAdjacentHTML("beforeend", divGroup.join('\n'));

// }

// function destroyBoxes() {
//   divBoxesEl.innerHTML = '';

// }

// destroyBtn.addEventListener('click', destroyBoxes)


const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(Number(inputEl.value)));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
 
  const boxesArr = [];

  const childElementCount = boxes.childElementCount;

  for (let i = childElementCount; i < amount + childElementCount; i++) {

    let size = i * 10 + 30;

    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.textContent = 'Box';

    boxesArr.push(box);
  }
  boxes.append(...boxesArr);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}