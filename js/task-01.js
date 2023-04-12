const ulCategories = document.getElementById('categories');

const listItems = ulCategories.children;
console.log(`Number of categories:`, listItems.length, `\n\n`);

const categoriesItems = ulCategories.querySelectorAll('li.item');

categoriesItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const length = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${length} \n\n`);
});



