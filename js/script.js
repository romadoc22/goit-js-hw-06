const categoryList = document.querySelector(
  "ul#categories"
);
const categoryItems =
  categoryList.querySelectorAll("li.item");
console.log(
  `Number of categories: ${categoryItems.length}`
);

for (const item of categoryItems) {
  const categoryNames =
    item.querySelector("h2").textContent;
  const categoryElements =
    item.querySelectorAll("li").length;
  console.log(`Category: ${categoryNames}`);
  console.log(`Elements: ${categoryElements}`);
}

// // Завдання 2

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
// const liElement = ingredients.map((option) => {
//   const liIngred = document.createElement(`li`);
//   liIngred.classList.add(`item`);
//   liIngred.textContent = option;
//   return liIngred;
// });

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

// // Завдання 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ulImages =
  document.querySelector(`.gallery`);
console.log(ulImages);

const liImages = images
  .map(
    (element) =>
      `<li><img src= "${element.url}" alt= "${element.alt}"></li>`
  )
  .join("");
ulImages.insertAdjacentHTML(
  `afterbegin`,
  liImages
);

// Завдання 4

const increment = document.querySelector(
  `[data-action = "increment"]`
);
const decrement = document.querySelector(
  `[data-action = "decrement"]`
);

const shownValue =
  document.getElementById("value");
let counterValue = 0;

increment.addEventListener(
  "click",
  btnIncrementHandler
);
decrement.addEventListener(
  "click",
  btnDecrementHandler
);

function btnIncrementHandler(event) {
  shownValue.textContent = counterValue;
  console.log((counterValue += 1));
}

function btnDecrementHandler(event) {
  shownValue.textContent = counterValue;
  console.log((counterValue -= 1));
}

// Завдання 5

// // Розробники люблять скорочувати все:
// //   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
// //   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
// //   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
// //   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
// //   У реченні не буде розділових знаків. g2d l2k e6e

// const input =
//   "Every developer likes to mix kubernetes and javascript";

// const result = input
//   .split(" ")
//   .map((word) => {
//     const { length } = word;
//     if (length < 4) {
//       return word;
//     } else {
//       return `${word[0]}${length - 2}${
//         word[length - 1]
//       }`;
//     }
//   })
//   .join(" ");

// console.log(result);
// // Result
// // 'E3y d7r l3s to mix k8s and j8t'
