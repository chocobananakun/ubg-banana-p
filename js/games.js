const games = [
    { name: "Snowball.io", image: "image/snow.png", description: "Battle", link: "/snow.html", category: "Battle,Action" },
    { name: "Slope", image: "image/slope.png", description: "Endless Runner", link: "/slope.html", category: "Arcade,Action" },
    { name: "Paper.io 2", image: "image/paper.png", description: "Battle", link: "/paper.html", category: "Battle,Action" },
    { name: "SNOWRIDER 3D", image: "image/snowrider.png", description: "Endless Runner", link: "/snowrider.html", category: "Action" },
    { name: "2048", image: "image/2048.png", description: "Puzzle", link: "pages/2048.html", category: "Puzzle" },
];

/*createGameCard*/

function createGameCard(game) {
    return `
        <div class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <a href="${game.link}" class="play-button">Play</a>
            </div>
        </div>
    `;
}

/*renderGames*/

function renderGames() {
    const gameGrid = document.getElementById('gameGrid');
    if (!gameGrid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
        categoryTitle.textContent = category || 'All Games';
    }

const filteredGames = category
    ? games.filter(game => game.category.split(',').map(c => c.trim()).includes(category))
    : games;


    gameGrid.innerHTML = filteredGames.map(createGameCard).join('');
}

function renderOtherGames() {
    const otherGamesList = document.getElementById('otherGamesList');
    if (!otherGamesList) return;

    const shuffledGames = games.sort(() => 0.5 - Math.random());
    const otherGames = shuffledGames.slice(0, 4);
    otherGamesList.innerHTML = otherGames.map(createGameCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    renderOtherGames();
});
