const input = document.querySelector(
  "#validation-input"
);
input.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(getText.dataset.length)
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
