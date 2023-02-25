const printName = document.querySelector(
  "#name-input"
);

const getName = document.querySelector(
  "#name-output"
);

// getName.addEventListener(`input`, event) = printName.textContent =
//   event.currentTarget.value === ""
//     ? "Anonymous"
//     : event.currentTarget.value;

if (event.currentTarget.value === "") {
  printName.textContent = "Anonymous";
  return;
}
printName.textContent = event.currentTarget.value;
