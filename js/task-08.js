const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', (event) => {

    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const login = formElements.email.value;
    const password = formElements.password.value;

    if (login && password ) {

        const formData = {
            login,
            password,
        }
        console.log(formData)

        formEl.reset();
    }
    else {
        alert('Всі поля повинні бути заповнені.')
    }
});