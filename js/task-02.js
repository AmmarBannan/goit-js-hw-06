const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients")
ul.textContent="ingredients"
ul.innerHTML+=ingredients.map((val)=>`<li class="item">${val}</li>`).join("")
