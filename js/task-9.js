// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(
  ".change-color"
);
const spanColor =
  document.querySelector(".color");

changeColorBtn.addEventListener(
  "click",
  changeBgc
);

function changeBgc() {
  const randomColor = getRandomHexColor();
  function getRandomHexColor() {
    return `#${Math.floor(
      Math.random() * 16777215
    )
      .toString(16)
      .padStart(6, 0)}`;
  }
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
