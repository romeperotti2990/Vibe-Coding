let gold = 0;
let autoClickers = 0;
let clickValue = 1;
let income = 0;
let multipliers = 0;

function saveGame() {
    const gameState = { gold, autoClickers, clickValue, income, multipliers };
    localStorage.setItem('clickerGame', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('clickerGame');
    if (saved) {
        const gameState = JSON.parse(saved);
        gold = gameState.gold || 0;
        autoClickers = gameState.autoClickers || 0;
        clickValue = gameState.clickValue || 1;
        income = gameState.income || 0;
        multipliers = gameState.multipliers || 0;
    }
}

const goldDisplay = document.getElementById('gold');
const ownedAuto = document.getElementById('ownedAuto');
const ownedMultiplier = document.getElementById('ownedMultiplier');
const clickButton = document.getElementById('clickButton');
const buy1 = document.getElementById('buy1');
const buy10 = document.getElementById('buy10');
const buy100 = document.getElementById('buy100');
const buyMult1 = document.getElementById('buyMult1');
const buyMult10 = document.getElementById('buyMult10');
const buyMult100 = document.getElementById('buyMult100');
const resetButton = document.getElementById('resetButton');
const toggleShop = document.getElementById('toggleShop');
const sidebar = document.querySelector('.sidebar');

loadGame();
updateDisplay();

function updateDisplay() {
    goldDisplay.textContent = 'Gold: ' + gold + ' (+' + income + '/sec) (+' + clickValue + ' per click)';
    ownedAuto.textContent = 'Owned: ' + autoClickers;
    ownedMultiplier.textContent = 'Owned: ' + multipliers;
    saveGame();
}

function buyAuto(amount) {
    const cost = amount * 10;
    if (gold >= cost) {
        gold -= cost;
        autoClickers += amount;
        income += amount;
        updateDisplay();
    }
}

function buyMultiplier(amount) {
    const cost = amount * 50;
    if (gold >= cost) {
        gold -= cost;
        clickValue += amount;
        multipliers += amount;
        updateDisplay();
    }
}

clickButton.addEventListener('click', () => {
    gold += clickValue;
    console.log('Clicked! Gold now:', gold);
    updateDisplay();
});

buy1.addEventListener('click', () => buyAuto(1));
buy10.addEventListener('click', () => buyAuto(10));
buy100.addEventListener('click', () => buyAuto(100));

buyMult1.addEventListener('click', () => buyMultiplier(1));
buyMult10.addEventListener('click', () => buyMultiplier(10));
buyMult100.addEventListener('click', () => buyMultiplier(100));

resetButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the game? All progress will be lost!')) {
        gold = 0;
        autoClickers = 0;
        clickValue = 1;
        income = 0;
        multipliers = 0;
        localStorage.removeItem('clickerGame');
        updateDisplay();
    }
});

toggleShop.addEventListener('click', () => {
    console.log('Toggle shop clicked');
    sidebar.classList.toggle('hidden');
    toggleShop.textContent = sidebar.classList.contains('hidden') ? '☰' : '✕';
});

// Auto-clicker logic
setInterval(() => {
    gold += autoClickers;
    updateDisplay();
}, 1000);
