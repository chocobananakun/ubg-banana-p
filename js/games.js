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
    { name: "Gold Miner", image: "image/gold-miner.png", description: "Arcade", link: "/gold-miner.html", category: "Arcade,Puzzle" },
    { name: "Drunken Boxing", image: "image/drunken-boxing.png", description: "Sport, Boxing", link: "/drunken-boxing.html", category: "Sport" },
    { name: "Shadow Stickman Fight", image: "image/shadow-stickman-fight.png", description: "Fighting", link: "/shadow-stickman-fight.html", category: "Fighting" },
    { name: "Murder Mafia", image: "image/murder-mafia.png", description: "Action", link: "/murder-mafia.html", category: "Action" },
    { name: "Get A Cool Gun", image: "image/get-a-cool-gun.png", description: "Arcade", link: "/get-a-cool-gun.html", category: "Arcade" },
    { name: "Vortex 9", image: "image/vortex-9.png", description: "Shooting", link: "/vortex-9.html", category: "Shooting" },
    { name: "Penguin Diner", image: "image/penguin-diner.png", description: "Simulation", link: "/penguin-diner.html", category: "Simulation" },
    { name: "Soccer Euro Cup 2025", image: "image/soccer-euro-cup-2025.png", description: "Sports", link: "/soccer-euro-cup-2025.html", category: "Sports" },
    { name: "G-Switch 3", image: "image/g-switch-3.png", description: "Adventure", link: "/g-switch-3.html", category: "Adventure" },
    { name: "Fireboy and Watergirl 2 in The Light Temple", image: "image/fireboy-and-watergirl-2-light-temple.png", description: "Adventure, Puzzle", link: "/fireboy-and-watergirl-2-light-temple.html", category: "Adventure,Puzzle" },
    { name: "Archery Ragdoll", image: "image/archery-ragdoll.png", description: "Shooting", link: "/archery-ragdoll.html", category: "Shooting" },
    { name: "Hero Pipe", image: "image/hero-pipe.png", description: "Puzzle", link: "/hero-pipe.html", category: "Puzzle" },
    { name: "Gun Mayhem 2 More Mayhem", image: "image/gun-mayhem-2-more-mayhem.png", description: "Shooting", link: "/gun-mayhem-2-more-mayhem.html", category: "Shooting" },
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
