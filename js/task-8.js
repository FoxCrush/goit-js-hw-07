const boxesContainerEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls').firstElementChild;
const renderButtonEl = document.querySelector('#controls').children[1];
const destroyButtonEl = document.querySelector('#controls').children[2];
let boxSize = 30;

const newContainersGenerator = () => {
    const newBoxesArray = [];
    for (let i = 0; i < inputEl.value; i++) {
        const newBox = document.createElement('div');
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        newBox.style.width = `${boxSize}px`;
        newBox.style.height = `${boxSize}px`;
        newBox.style.backgroundColor = "#" + randomColor;
        newBox.style.margin = '5px';

        boxSize += 10;
        newBoxesArray.push(newBox);
    }
    boxesContainerEl.append(...newBoxesArray);
}
const destroyBoxes = () => {
    boxSize = 30;
    const array = [...boxesContainerEl.children];
    array.map((item) => {
        item.remove();
    });
}
renderButtonEl.addEventListener('click', newContainersGenerator);
destroyButtonEl.addEventListener('click', destroyBoxes);