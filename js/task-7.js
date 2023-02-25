const fontSizeControl = document.querySelector(
  "#font-size-control"
);
const text = document.querySelector("#text");

fontSizeControl.addEventListener(
  "input",
  changeFontSize
);

function changeFontSize(event) {
  const currentSize = event.currentTarget.value;
  text.style.fontSize = event.target.value + "px";
}
