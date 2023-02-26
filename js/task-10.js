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
  onBtnCreateClickHandler
);
refs.btnDestroy.addEventListener(
  "click",
  destroyBoxes
);

function onBtnCreateClickHandler() {
  createBoxes(refs.input.value);
}

let amount = refs.getInput.value;
// Функції

function getBoxAmount(event) {
  refs.getInput.setAttribute(
    "amount",
    event.currentTarget.value
  );
}

const createBoxes = (amount) => {
  let arrayDiv = [];

  for (let i = 0; i <= amount; i += 1) {
    let div = document.createElement("div");

    div.style.height = `${20 + i * 10}px`;
    div.style.width = `${20 + i * 10}px`;
    div.style.background = getRandomHexColor();

    div.append(i);
    arrayDiv.push(div);
  }
  boxes.append(...arrayDiv);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(createBoxes);
