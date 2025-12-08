let gold = 0;
let autoClickers = 0;
let superAutoClickers = 0;
let clickValue = 1;
let income = 0;
const goldDisplay = document.getElementById('gold');
const clickButton = document.getElementById('clickButton');
const buyAutoClicker = document.getElementById('buyAutoClicker');
const buySuperAutoClicker = document.getElementById('buySuperAutoClicker');
const buyMultiplier = document.getElementById('buyMultiplier');
const toggleShop = document.getElementById('toggleShop');
const sidebar = document.querySelector('.sidebar');

function updateDisplay() {
    goldDisplay.textContent = 'Gold: ' + gold + ' (+' + income + '/sec)';
}

clickButton.addEventListener('click', () => {
    gold += clickValue;
    updateDisplay();
});

buyAutoClicker.addEventListener('click', () => {
    if (gold >= 10) {
        gold -= 10;
        autoClickers++;
        income += 1;
        updateDisplay();
    }
});

buySuperAutoClicker.addEventListener('click', () => {
    if (gold >= 100) {
        gold -= 100;
        superAutoClickers++;
        income += 10;
        updateDisplay();
    }
});

buyMultiplier.addEventListener('click', () => {
    if (gold >= 50) {
        gold -= 50;
        clickValue *= 2;
        updateDisplay();
    }
});

toggleShop.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    toggleShop.textContent = sidebar.classList.contains('hidden') ? '☰ Shop' : '✕ Shop';
});

// Auto-clicker logic
setInterval(() => {
    gold += autoClickers + (superAutoClickers * 10);
    updateDisplay();
}, 1000);
