const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", () => {
  const inputLength = inputEl.value.length;
  const inputDataLength = Number.parseInt(inputEl.dataset.length);
  const classes = ["valid", "invalid"];

  inputEl.classList.remove(...classes);
  if (inputLength === inputDataLength) {
    inputEl.classList.add("valid");
  } else if (inputLength > 0) {
    inputEl.classList.add("invalid");
  }

  // // #OLD When the input length is equal to 6 is valid
  // if (inputLength === 0) {
  //   inputEl.classList.remove(...classes);
  // } else {
  //   inputEl.classList.add("invalid");
  //   inputEl.classList.remove("valid");
  // }
  // if (inputLength === inputDataLength) {
  //   inputEl.classList.replace("invalid", "valid");
  // }

  // // When the input length is equal or greater than 6 is valid
  // if (inputLength === 0) {
  //   inputEl.classList.remove("valid");
  //   inputEl.classList.remove("invalid");
  // } else {
  //   inputEl.classList.add("invalid");
  // }

  // if (inputLength >= inputDataLength) {
  //   inputEl.classList.replace("invalid", "valid");
  // }

  // if (inputLength < inputDataLength) {
  //   inputEl.classList.replace("valid", "invalid");
  // }
  console.log("class: " + inputEl.classList.value);
});
