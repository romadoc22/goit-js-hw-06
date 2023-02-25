const form = document.querySelector(
  ".login-form"
);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements =
    event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(formData);
    form.reset();
  }
}

// const formData = new FormData(
//   event.currentTarget
// );
// for (const p of formData) {
//   if (p[1] === "") {
//     alert("Please fill in all the fields!");
//     return;
//   }
// }
