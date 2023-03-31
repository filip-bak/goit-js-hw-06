const bodyEl = document.querySelector("body");
const textColorEl = document.querySelector("span.color");
const colorChangeBtn = document.querySelector("button.change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorChangeBtn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  textColorEl.textContent = getRandomHexColor();
});
