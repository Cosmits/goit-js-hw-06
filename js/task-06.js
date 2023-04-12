const textInput = document.getElementById('validation-input');
const length = textInput.dataset.length;

textInput.addEventListener('focus', () => { 
    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');
})

textInput.addEventListener('blur', () => {
    if (textInput.value.length == length) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
});