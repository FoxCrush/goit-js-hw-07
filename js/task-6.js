const validationInputEl = document.querySelector('#validation-input');
console.log(validationInputEl.value.length)
console.log(validationInputEl.dataset.length)
const checkInputLength = () => {
    if (validationInputEl.value.length === Number(validationInputEl.dataset.length)) {
        console.log('length is equal')
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
    } else {
        console.log('script fails')
        validationInputEl.classList.remove('valid');
        validationInputEl.classList.add('invalid');
    }
    console.log(validationInputEl.classList)
}
validationInputEl.addEventListener('change', checkInputLength)