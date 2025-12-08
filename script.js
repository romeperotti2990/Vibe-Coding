let gold = 0;
let autoClickers = 0;
let clickValue = 1;
let income = 0;
let multipliers = 0;
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
const toggleShop = document.getElementById('toggleShop');
const sidebar = document.querySelector('.sidebar');

function updateDisplay() {
    goldDisplay.textContent = 'Gold: ' + gold + ' (+' + income + '/sec) (+' + clickValue + ' per click)';
    ownedAuto.textContent = 'Owned: ' + autoClickers;
    ownedMultiplier.textContent = 'Owned: ' + multipliers;
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
    updateDisplay();
});

buy1.addEventListener('click', () => buyAuto(1));
buy10.addEventListener('click', () => buyAuto(10));
buy100.addEventListener('click', () => buyAuto(100));

buyMult1.addEventListener('click', () => buyMultiplier(1));
buyMult10.addEventListener('click', () => buyMultiplier(10));
buyMult100.addEventListener('click', () => buyMultiplier(100));

toggleShop.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    toggleShop.textContent = sidebar.classList.contains('hidden') ? '☰' : '✕';
});

// Auto-clicker logic
setInterval(() => {
    gold += autoClickers;
    updateDisplay();
}, 1000);
