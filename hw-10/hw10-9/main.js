
const price = 'price';
const timestamp = 'lastUpdate';


let currentPrice = parseInt(localStorage.getItem(price)) || 100;
const lastUpdate = parseInt(localStorage.getItem(timestamp)) || 0;


const now = Date.now();


if (now - lastUpdate >= 10000) {

    currentPrice += 10;


    localStorage.setItem(timestamp, now);
    localStorage.setItem(price, currentPrice);
}

const priceBlock = document.getElementById('priceBlock');
priceBlock.textContent = `${currentPrice}грн`;
