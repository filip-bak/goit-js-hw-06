const categoryItems = document.querySelectorAll("#categories .item");
const categoryNames = document.querySelectorAll("#categories .item > h2");
const itemsList = document.querySelectorAll("#categories .item ul");

const categoryItemCount = categoryItems.length;

console.log(`Number of categories: ${categoryItemCount}`);

categoryNames.forEach((name, idx) => {
  const elementItemsCount = itemsList[idx].getElementsByTagName("li").length;
  console.log("\n");
  console.log(`Category: ${name.textContent}`);
  console.log(`Elements: ${elementItemsCount}`);
});

// // Getting <h2> elements from <li class="item"> element
// categoryItems.forEach((name, idx) => {
//   const categoryName = name.getElementsByTagName("h2")[0];
//   const itemListCount = itemList[idx].getElementsByTagName("li").length;
//   console.log("\n");
//   console.log(`Category: ${categoryName.textContent}`);
//   console.log(`Elements: ${itemListCount}`);
// });
