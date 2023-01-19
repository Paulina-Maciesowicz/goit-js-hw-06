const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

// for (let i = 0; i < categories.length; i += 1) {
//     console.log(categories[i]);
// };

for (const nameCategory of categories) {
    console.log(`Category:${nameCategory.firstElementChild.textContent}`);
    console.log(`Elements:${nameCategory.lastElementChild.childElementCount}`);
};
