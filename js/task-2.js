const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsListEl = document.querySelector('#ingredients');

  const createIngredientsItemEl = (array) => {
      const newArray = [];
      array.forEach((item)=>{
        const itemEl = document.createElement('li');
        itemEl.textContent = item;
        newArray.push(itemEl);
      })
      return newArray;
    }

    ingredientsListEl.append(...createIngredientsItemEl(ingredients))



