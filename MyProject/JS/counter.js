// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

    // обьявляем переменну для счетчика
    let counter;
   

    // проверяем клик только по кнопкам плюс или минус
    if (event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus' || event.target.dataset.action === 'delete') {


        // находим обертку счетчика
        const counterWrapper = event.target.closest('.nameAndPrice');

        // находим блок с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    }

    


    // Проверяю является ли элемент по которому кликнул, Плюс
    if (event.target.dataset.action === 'plus') {


        // изменяем текст внутри счетчика
        counter.innerText = ++counter.innerText;



    }
    // Проверяю является ли элемент по которому кликнул, Минус
    if (event.target.dataset.action === 'minus') {


        // Проверяем чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            // изменяем текст внутри счетчика
            counter.innerText = --counter.innerText;
        }

    }
   



    if(event.target.hasAttribute('data-action') && event.target.closest('cart-item')){
        calcCartPrice();
    }
})
