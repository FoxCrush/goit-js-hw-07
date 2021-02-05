const validationInputEl = document.querySelector('#validation-input');
console.log(validationInputEl.value.length)
console.log(validationInputEl.dataset.length)
const checkInputLength = () => {
    if (validationInputEl.value.length === Number(validationInputEl.dataset.length)) {
        console.log('length is equal')
        validationInputEl.classList.replace('invalid', 'valid')
    } else {
        console.log('script fails')
        validationInputEl.classList.add('valid','invalid')
    }
    console.log(validationInputEl.classList)
}
validationInputEl.addEventListener('change', checkInputLength)