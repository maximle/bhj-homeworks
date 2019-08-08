counter = document.querySelectorAll('div.product__quantity-value');
console.log(counter[0].nextElementSibling);
productAdd = document.querySelectorAll('div.product__add');
productImg = document.querySelectorAll('img');
console.log(productImg[0].src);
cart = document.querySelector('.cart__products');

let k = [];

for (let i = 0; i < counter.length; i++) {
    counter[i].nextElementSibling.addEventListener('click', counterChangeInc);
    counter[i].previousElementSibling.addEventListener('click', counterChangeDec);
    k[i] = 0;
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
        console.log(counter.length, cart.children.length);
        //if (cart.children[i].getAttribute('data-id')) {
        function addProduct() {
            cart.innerHTML += `
            <div class="cart__product" data-id="` + att+ `">
            <img class="cart__product-image" src=`
                + productImg[i].src + `>
                 <div class="cart__product-count">` + counter[i].textContent + `</div>
            </div>
                `;
            //cart.children[i].setAttribute('data-id', att);
            console.log('added');
            k[i] = 1;
        };

        console.log(cartProducts.children.length);
        
        for (let j = 0; j < cartProducts.children.length; j++) {
            if (cartProducts.children[j].getAttribute('data-id') === att) {

            }
        };

        if (k[i] === 0) {
            addProduct();
            console.log('that');
        } else if (k[i] === 1) {
            for (let j = 0; j < cartProducts.children.length; j++) {
                if (cartProducts.children[j].getAttribute('data-id') === att) {
                    console.log('this');
                    let value1 = parseInt(cartProducts.children[j].querySelector('div.cart__product-count').textContent, 10);
                    cartProducts.children[j].querySelector('div.cart__product-count').innerHTML = value1 + parseInt(counter[i].textContent, 10);
            
                };
            };
        }
        console.log(cartProducts.children.length);


        
    };
};

