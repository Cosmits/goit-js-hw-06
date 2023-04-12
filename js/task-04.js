let counterValue = 0;

const spanId = document.getElementById('value');

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => spanId.textContent = counterValue += 1);

decrementBtn.addEventListener('click', () => spanId.textContent = counterValue -= 1);