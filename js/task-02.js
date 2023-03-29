const ingredientsEl = document.querySelector("ul#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let newItems = [];
for (const ingredient of ingredients) {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  newItems.push(newItem);
}
ingredientsEl.append(...newItems);

// info
console.log(ingredientsEl);
