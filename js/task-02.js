const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const element = document.querySelector('#ingredients');
for (const ingridient of ingredients) {
  const obojetnieJak = document.createElement('li');

  obojetnieJak.textContent = ingridient;
  obojetnieJak.classList.add(ingridient);
  element.append(obojetnieJak);

};
