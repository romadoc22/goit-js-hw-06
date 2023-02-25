const refs = document.querySelector(
  "#name-input"
);

const getName = document.querySelector(
  "#name-output"
);

function onInputEvent(event) {
  refs.nameLabel.textContent =
    event.currentTarget.value === ""
      ? "Anonymous"
      : event.currentTarget.value;
}
getName.textContent = event.currentTarget.value;
