const controlsEl = document.querySelector("div#controls");
const numberInputEl = document.querySelector("div#controls input");
const boxesEl = document.querySelector("div#boxes");

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

// other ↓
// let divSize = 30;
function createBoxes(amount) {
  // if other need ­to comment line 12
  let divSize = 30;
  amount = numberInputEl.value;
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxesEl.append(newDiv);
    divSize += 10;
    console.log(divSize);
    // other ↓
    // if (divSize > 450) {
    //   divSize = 30;
    // }
  }
  numberInputEl.value = null;
}
function destroyBoxes() {
  boxesEl.innerHTML = "";
  // other ↓
  // divSize = 30;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener("click", createBoxes);

btnDestroy.addEventListener("click", destroyBoxes);
