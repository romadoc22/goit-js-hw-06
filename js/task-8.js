const form = document.querySelector(
  ".login-form"
);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = new FormData(
    event.currentTarget
  );
  for (const p of formData) {
    if (p[1] === "") {
      alert("Please fill in all the fields!");
      return;
    }
  }
}

// if (email === "" || password === "") {
//   alert("Please fill in all the fields!")
// }  else {
//   console.log(formData);
//     };
// };
