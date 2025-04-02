const games = [
    { name: "Vex 8", image: "image/vex-8.png", description: "Endless Runner", link: "/vex-8.html", category: "Arcade,Action" },
    { name: "Slope", image: "image/slope.png", description: "Endless Runner", link: "/slope.html", category: "Arcade,Action" },
    { name: "Run 3", image: "image/run3.jpg", description: "Action", link: "/run-3.html", category: "Action" },
    { name: "Pac-man", image: "image/pac-man.png", description: "Arcade", link: "/pac-man.html", category: "Arcade" },
    { name: "2048", image: "image/2048.png", description: "Puzzle", link: "/2048.html", category: "Puzzle" },
    { name: "Fireboy And Watergirl 1", image: "image/fireboy-and-watergirl-1.jfif", description: "Puzzle", link: "/Fireboy-And-Watergirl-1.html", category: "Puzzle,Adventure" },
    { name: "Vex X3M 2", image: "image/vex-x3m-2.jpg", description: "Adventure", link: "/vex-x3m-2.html", category: "Action,Adventure" },
    { name: "Moto X3M Pool Party", image: "image/moto-x3m-pool-party.jpeg", description: "Adventure", link: "/moto-x3m-pool-party.html", category: "Action,Adventure" },
    { name: "Tunnel Rush", image: "image/tunnel-rush.png", description: "Endless Runner", link: "/tunnel-rush.html", category: "Adventure" },
    { name: "Tanuki Sunset", image: "image/tanuki-sunset.png", description: "Sports", link: "/tanuki-sunset.html", category: "Sports" },
    { name: "Basketball Stars", image: "image/basketball-stars.png", description: "Sports", link: "/basketball-stars.html", category: "Sports" },
    { name: "Getaway Shootout", image: "image/getaway-shootout.png", description: "Action", link: "/getaway-shootout.html", category: "Action" },
    { name: "Rooftop Snipers", image: "image/rooftop-snipers.png", description: "Action", link: "/rooftop-snipers.html", category: "Action" },
    { name: "MX OffRoad Mountain Bike", image: "image/mx-offroad-mountain-bike.png", description: "Sports", link: "/mx-offroad-mountain-bike.html", category: "Sports" },
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
