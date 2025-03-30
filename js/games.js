const games = [
    { name: "Vex 8", image: "image/vex-8.png", description: "Endless Runner", link: "/vex-8.html", category: "Arcade,Action" },
    { name: "Slope", image: "image/slope.png", description: "Endless Runner", link: "/slope.html", category: "Arcade,Action" },
    { name: "Run 3", image: "image/run3.jpg", description: "Action", link: "/run-3.html", category: "Action" },
    { name: "Pac-man", image: "image/pac-man.png", description: "Arcade", link: "/pac-man.html", category: "Arcade" },
    { name: "2048", image: "image/2048.png", description: "Puzzle", link: "/2048.html", category: "Puzzle" },
    { name: "Fireboy And Watergirl 1", image: "image/fireboy-and-watergirl-1.jfif", description: "Puzzle", link: "/fireboy-and-watergirl-1.html", category: "Puzzle,Adventure" },
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
