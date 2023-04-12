const categoriesItems = document.querySelectorAll('li.item');

console.log(`Number of categories:`, categoriesItems.length, `\n\n`);

categoriesItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const length = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${length} \n\n`);
});