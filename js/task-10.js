function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

let globalCounter = 0;


createBtn.addEventListener('click', () => createBoxes(Number(inputEl.value)))


function createBoxes(amount) {

  let max__i = 0;

  for (let i = globalCounter; i < amount + globalCounter; i += 1) {

    let num = i * 10 + 30;
    max__i = i;

    const divNewEl = document.createElement('div');
    divNewEl.style.width = `${num}px`;
    divNewEl.style.height = `${num}px`;

    divNewEl.style.backgroundColor = getRandomHexColor();
    divBoxesEl.append(divNewEl);
  }
  globalCounter = globalCounter + (max__i - globalCounter + 1);
  
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
  globalCounter = 0;
}

destroyBtn.addEventListener('click', destroyBoxes)