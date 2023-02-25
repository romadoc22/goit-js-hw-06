// const nameLabel = document.querySelector(
//   "#name-input"
// );

// const getName = document.querySelector(
//   "#name-output"
// );

const refs = {
  nameLabel: document.querySelector(
    "#name-input"
  ),
  getName: document.querySelector("#name-output"),
};

refs.nameLabel.addEventListener(
  "input",
  onInputEvent
);

function onInputEvent(event) {
  refs.getName.textContent =
    event.currentTarget.value === ""
      ? "Anonymous"
      : event.currentTarget.value;
}
