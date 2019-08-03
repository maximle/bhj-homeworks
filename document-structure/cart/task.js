counter = document.querySelectorAll('div.product__quantity-value');
console.log(counter[0].nextElementSibling);
productAdd = document.querySelectorAll('div.product__add');
productImg = document.querySelectorAll('img');
console.log(productImg[0].src);
cart = document.querySelector('.cart__products');

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
        cart.innerHTML += `
        <div class="cart__product" data-id="">
        <img class="cart__product-image" src=`
            + productImg[i].src + `>
             <div class="cart__product-count">` + counter[i].textContent + `</div>
        </div>
            `;
        let att = counter[i].closest('div.product').getAttribute('data-id');
        cart.children[i].setAttribute('data-id', att);
    };

};