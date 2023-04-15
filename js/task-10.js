const controlsEl = document.querySelector("div#controls");
const numberInputEl = document.querySelector("div#controls input");
const boxesEl = document.querySelector("div#boxes");

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const validation = (event) => {
  const inputNumber = +event.currentTarget.value;
  if (inputNumber > 100) {
    event.currentTarget.value = 100;
    alert("You can't create more than 100");
  }
};

// other option -> it will create boxes that are bigger than last one

// other option ↓
// let divSize = 30;

function createBoxes(amount) {
  // if 'other option' need ­to comment line below
  let divSize = 30;

  let boxes = [];
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${divSize}px`;
    newBox.style.height = `${divSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.push(newBox);
    divSize += 10;

    // ↓ other option
    // if (divSize > 450) {
    //   divSize = 30;
    // }
  }
  numberInputEl.value = null;
  boxesEl.append(...boxes);
}
function destroyBoxes() {
  boxesEl.innerHTML = "";

  // ↓ other option
  // divSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

numberInputEl.addEventListener("change", validation);

btnCreate.addEventListener("click", () => createBoxes(numberInputEl.value));

btnDestroy.addEventListener("click", destroyBoxes);
