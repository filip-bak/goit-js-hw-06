const formEl = document.querySelector("form.login-form");

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled in!");
    return;
  }

  const Data = {
    email: email.value,
    password: password.value,
  };

  console.log(Data);

  event.currentTarget.reset();
}
formEl.addEventListener("submit", formSubmit);

console.log(formEl);
