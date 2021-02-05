const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const editNameOutput = (event) => {
    nameOutputEl.textContent = nameInputEl.value;
    if (nameInputEl.value === '') {
        nameOutputEl.textContent = 'незнакомец';
    }
};

nameInputEl.addEventListener('input', editNameOutput);
