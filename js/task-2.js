const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngred = document.querySelector(
  "#ingredients"
);
console.log(ulIngred);
const makeLiElement = (option) => {
  return option.map((option) => {
    const liIngred = document.createElement(`li`);
    liIngred.classList.add(`item`);
    liIngred.textContent = option;
    return liIngred;
  });
};

const liElement = makeLiElement(ingredients);
console.log(liElement);

ulIngred.append(...liElement);
