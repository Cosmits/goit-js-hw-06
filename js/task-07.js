const inputRange = document.getElementById('font-size-control')

const spanText = document.getElementById('text')

inputRange.addEventListener('input', () => {
    const fontSize = inputRange.value;
    spanText.style.fontSize = `${fontSize}px`;
})