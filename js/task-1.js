const categoryList = document.querySelector(
  "ul#categories"
);
const categoryItems =
  categoryList.querySelectorAll("li.item");
console.log(
  `Number of categories: ${categoryItems.length}`
);

for (const item of categoryItems) {
  const categoryNames =
    item.querySelector("h2").textContent;
  const categoryElements =
    item.querySelectorAll("li").length;
  console.log(`Category: ${categoryNames}`);
  console.log(`Elements: ${categoryElements}`);
}
