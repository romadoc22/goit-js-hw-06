// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
//

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  getInput: document.querySelector("input"),
  btnCreate: document.querySelector(
    "button[data-create]"
  ),
  btnDestroy: document.querySelector(
    "button[data-destroy]"
  ),
  boxes: document.querySelector("#boxes"),
};

// Слухачі

refs.btnCreate.addEventListener(
  "click",
  onBtnCreateClickHandler
);
refs.btnDestroy.addEventListener(
  "click",
  destroyBoxes
);

function onBtnCreateClickHandler() {
  createBoxes(refs.getInput.value);
}

// Функції
const createBoxes = (amount) => {
  let arrayDiv = [];

  for (let i = 0; i <= amount; i += 1) {
    let div = document.createElement("div");

    div.style.height = `${20 + i * 10}px`;
    div.style.width = `${20 + i * 10}px`;
    div.style.background = getRandomHexColor();

    arrayDiv.push(div);
  }
  boxes.append(...arrayDiv);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
