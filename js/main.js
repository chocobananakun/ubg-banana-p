function createCategories() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;

    categoryList.innerHTML = ''; // 重複防止

    const basePath = getBasePath();

    categories.forEach(category => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        // クエリパラメータ付きリンクにする
        a.href = `${basePath}index.html${category.name === "All Games" ? '' : '?category=' + encodeURIComponent(category.name)}`;
        a.textContent = category.name;
        a.classList.add('category-link');

        li.appendChild(a);
        categoryList.appendChild(li);
    });
}

function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) return '../';
    return '';
}

function createGameCard(game, basePath = '') {
    return `
    <div class="game-card">
      <img src="${basePath}${game.image}" alt="${game.name}">
      <div class="game-info">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <a href="${basePath}pages/${game.link}" class="play-button">Play</a>
      </div>
    </div>
  `;
}

function renderGames(category = null) {
    const gameGrid = document.getElementById('gameGrid');
    const categoryTitle = document.getElementById('categoryTitle');
    if (!gameGrid) return;

    const basePath = getBasePath();

    const filteredGames = category
        ? games.filter(game => game.category.split(',').map(c => c.trim()).includes(category))
        : games;

    if (categoryTitle) {
        categoryTitle.textContent = category || "All Games";
    }

    gameGrid.innerHTML = filteredGames.map(game => createGameCard(game, basePath)).join('');
}

function renderOtherGames() {
    const otherGamesList = document.getElementById('otherGamesList');
    if (!otherGamesList) return;

    const basePath = getBasePath();

    const currentGameName = document.body.dataset.gameName;
    console.log("現在のゲーム名:", currentGameName);

    const filteredGames = games.filter(game => game.name !== currentGameName);
    console.log("フィルター後のゲーム数:", filteredGames.length);

    const shuffledGames = [...filteredGames].sort(() => 0.5 - Math.random());
    const otherGames = shuffledGames.slice(0, 4);

    otherGamesList.innerHTML = otherGames.map(game => createGameCard(game, basePath)).join('');
}