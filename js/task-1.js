
const categoriesEl = document.querySelector('#categories');
const innerCategoriesEl = document.querySelectorAll('#categories .item');


const postLogWithItemTitles = (element) => {
    element.forEach((elementItem) => {
        console.log(`Категория: ${elementItem.firstElementChild.textContent}`);
        console.log(`Количество элементов: ${elementItem.lastElementChild.children.length}`);
    });
};

const countElementHigherCategories = (element) => {
    const numberOfElementChildren = element.children.length;
    console.log(`В списке ${numberOfElementChildren} категории.`);
};

countElementHigherCategories(categoriesEl);
postLogWithItemTitles(innerCategoriesEl);