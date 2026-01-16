const priceBlock = document.getElementById("priceBlock");

let price = parseInt(localStorage.getItem("price")) || 100;
let lastReload = parseInt(localStorage.getItem("lastReload")) || 0;
const now = Date.now();

if (now - lastReload > 10000) {
    price += 10;
}
priceBlock.textContent = price + "грн";

localStorage.setItem("price", price);
localStorage.setItem("lastReload", now);



