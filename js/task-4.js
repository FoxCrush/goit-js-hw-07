const bodyEl = document.querySelector('body');
const resetButtonEl = document.createElement('button');
resetButtonEl.textContent = 'reset value';
bodyEl.append(resetButtonEl);
const valueEL = document.querySelector('#value');
let counterValue = 0;
const increment = () => {
    counterValue += 1;
    valueEL.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    valueEL.textContent = counterValue;
};
const reset = () => (valueEL.textContent = 0);
const bodyClickFn = () => {

    if (event.target.dataset.action === 'increment') {
    console.log(event.target.dataset.action)
        increment()
    }
    if (event.target.dataset.action === 'decrement') {
        console.log(event.target.dataset.action)
        decrement()
    }
};
resetButtonEl.addEventListener('click', reset);
bodyEl.addEventListener('click', bodyClickFn);
