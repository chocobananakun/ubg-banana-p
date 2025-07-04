function createCategories() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;

    categoryList.innerHTML = ''; // 重複防止

    categories.forEach(category => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        // クエリパラメータ付きリンクにする
        a.href = `index.html${category.name === "All Games" ? '' : '?category=' + encodeURIComponent(category.name)}`;
        a.textContent = category.name;
        a.classList.add('category-link');

        li.appendChild(a);
        categoryList.appendChild(li);
    });
}

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

function renderGames(category = null) {
    const gameGrid = document.getElementById('gameGrid');
    const categoryTitle = document.getElementById('categoryTitle');
    if (!gameGrid) return;

    const filteredGames = category
        ? games.filter(game => game.category.split(',').map(c => c.trim()).includes(category))
        : games;

    if (categoryTitle) {
        categoryTitle.textContent = category || "All Games";
    }

    gameGrid.innerHTML = filteredGames.map(createGameCard).join('');
}

function renderOtherGames() {
    const otherGamesList = document.getElementById('otherGamesList');
    if (!otherGamesList) return;

    const shuffledGames = [...games].sort(() => 0.5 - Math.random());
    const otherGames = shuffledGames.slice(0, 4);
    otherGamesList.innerHTML = otherGames.map(createGameCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    createCategories();
    renderGames(); // 初期表示：全ゲーム
    renderOtherGames();
});