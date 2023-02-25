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
