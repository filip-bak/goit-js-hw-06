const allButtons = document.querySelectorAll("button[data-action]");
// const incrementBtn = document.querySelector("button[data-action='increment']");
// const decrementBtn = document.querySelector("button[data-action='decrement']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonAction = button.dataset.action;

    if (buttonAction === "increment") {
      counterValue++;
    } else {
      counterValue--;
    }
    valueEl.textContent = counterValue;
  });
});
