function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item');

    const totalPriceEl = document.querySelector('.total-price');

    let priceTotal = 0;

    cartItems.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        priceTotal = priceTotal + currentPrice;
    })

    totalPriceEl.innerText = priceTotal;
}