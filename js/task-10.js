function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxesEl = document.getElementById('boxes')
const inputEl = document.querySelector('input');


createBtn.addEventListener('click', () => createBoxes(Number(inputEl.value)))
destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {

  if (!amount) {
    return false;
  }

  const childElementCount = divBoxesEl.childElementCount;
  const divGroup = [];

  for (let i = 0; i < amount; i += 1) {

    let num = i * 10 + 30;
    const divStr = `<div style="width: ${num}px; height: ${num}px; background-color: ${getRandomHexColor()};"></div>`
    divGroup.push(divStr);

  }

  divBoxesEl.insertAdjacentHTML("beforeend", divGroup.join('\n'));

}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}
