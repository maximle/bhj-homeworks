counter = document.querySelectorAll('div.product__quantity-value');
console.log(counter[0].nextElementSibling);
productAdd = document.querySelectorAll('div.product__add');
productImg = document.querySelectorAll('img');
console.log(productImg[0].src);
cart = document.querySelector('.cart__products');
let caviar = 0;
let cook = 0;
for (let i = 0; i < counter.length; i++) {
    counter[i].nextElementSibling.addEventListener('click', counterChangeInc);
    counter[i].previousElementSibling.addEventListener('click', counterChangeDec);
    
    function counterChangeInc() {
        let value = parseInt(counter[i].textContent, 10);
        value++;
        counter[i].textContent = value;
    };
    
    function counterChangeDec() {
        let value = parseInt(counter[i].textContent, 10);
        if (value > 1) {
            value --; 
        } else if (value < 1) {
            value = value;
        };
        counter[i].textContent = value;
    };

    productAdd[i].addEventListener('click', addToCart);

    function addToCart() {
        let att = counter[i].closest('div.product').getAttribute('data-id');
        let cartProducts = document.querySelector('div.cart__products');
        
        //if (cart.children[i].getAttribute('data-id')) {
        function addProduct() {
            cart.innerHTML += `
            <div class="cart__product" data-id="">
            <img class="cart__product-image" src=`
                + productImg[i].src + `>
                 <div class="cart__product-count">` + counter[i].textContent + `</div>
            </div>
                `;
            cart.children[i].setAttribute('data-id', att);
        }

        for (let i = 0; i < cartProducts.children.length; i++) {
            if (cartProducts.children[i].getAttribute('data-id') === '1' ) {
                caviar = 1;
            } else if (cartProducts.children[i].getAttribute('data-id') === '2') {
                cook = 1;
            };
        };

        if (att === '1' && caviar === 0) {
            addProduct();
        } else if (att === '1' && caviar === 1) {
            for (let i = 0; i < cartProducts.children.length; i++) {
                if (cartProducts.children[i].getAttribute('data-id') === att ) {
                    let value1 = parseInt(cartProducts.children[i].querySelector('div.cart__product-count').textContent, 10);
                    cartProducts.children[i].querySelector('div.cart__product-count').innerHTML = value1 + parseInt(counter[i].textContent, 10);
                };
            };

        } else if (att === '2' && cook === 0) {
            addProduct();

        } else if (att === '2' && cook === 1) {
            for (let i = 0; i < cartProducts.children.length; i++) {
                if (cartProducts.children[i].getAttribute('data-id') === att ) {
                    let value1 = parseInt(cartProducts.children[i].querySelector('div.cart__product-count').textContent, 10);
                    cartProducts.children[i].querySelector('div.cart__product-count').innerHTML = value1 + parseInt(counter[i].textContent, 10);
                };
            };
        }
    };

};