// const nameLabel = document.querySelector(
//   "#name-input"
// );

// const getName = document.querySelector(
//   "#name-output"
// );

refs = {
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
  refs.nameLabel.textContent =
    event.currentTarget.value === ""
      ? "Anonymous"
      : refs.getName.currentTarget.value;
}
