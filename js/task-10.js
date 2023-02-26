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

refs.getInput.addEventListener(
  "input",
  getBoxAmount
);
refs.btnCreate.addEventListener(
  "click",
  createBoxes
);
// refs.btnDestroy.addEventListener(
//   "click",
//   destroyBoxes
// );

let startBoxWidth = 30;
let starBoxHeight = 30;

// Функції

function getBoxAmount(event) {
  refs.getInput.setAttribute(
    "amount",
    event.currentTarget.value
  );
}

function createBoxes(amount) {
  let amountBoxes =
    refs.getInput.getAttribute("amount");
  for (let i = 0; i < amountBoxes; i += 1) {
    startBoxWidth += 10;
    starBoxHeight += 10;

    const box = document.createElement("div");
    box.style.width = "${startBoxWidth}";
    box.style.height = "${starBoxHeight}";
    box.classList.add("box");
    box.style.background = getRandomHexColor();
  }
  boxes.push(box);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(createBoxes);
