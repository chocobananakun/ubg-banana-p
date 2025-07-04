const categories = [
    { name: "Home" },
    { name: "Action" },
    { name: "Fighting" },
    { name: "Shooting" },
    { name: "Arcade" },
    { name: "Sports" },
    { name: "Puzzle" },
    { name: "Adventure" },
    { name: "Simulation" },
    { name: "All Games" }
];

function createCategories() {
    const categoryList = document.getElementById('categoryList');
    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category.name;
        categoryList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', createCategories);