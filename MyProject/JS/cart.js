// Див в который будем отрисовывать товар
const cartWrapper = document.querySelector('.cart-items');


window.addEventListener('click', function (event) {

    // Проверяем что клик был совершен по кнопке Добавить в корзину
    if (event.target.hasAttribute('data-cart')) {

        // находим карточку товара
        const card = event.target.closest('.menuItem');

        // собираем данные с этого товара и записываем их в объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            price: card.querySelector('.price-currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };

        // Проверяем есть ли такой товар в корзине

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);

        } else {
            // подставляем данные в шаблон
            const cartItemHTML = `
            <div data-id="${productInfo.id}" class="cart-item">
            <div class="item-img">
                <img src="${productInfo.imgSrc}" alt="">
            </div>

            <div class="item-description">
                <h5>${productInfo.title}</h5>
                <p>Far far away, behind the word mountains, far from the countries</p>
            </div>

            <div class="price">
                <span>${productInfo.price}</span>
                <span>$</span>
            </div>

            <div class="quantity">
                <p data-counter >${productInfo.counter}</p>
            </div>
            

        </div>`;

            // отображаем товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        // сбрасываем счетчик после добавления товара
        card.querySelector('[data-counter]').innerText = '1';

        calcCartPrice();
    }
})