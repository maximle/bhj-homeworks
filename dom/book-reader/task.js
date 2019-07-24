let fontLink = document.querySelectorAll('a.font-size');
let fontSize = document.querySelector('div.book');
let textColorLink = document.querySelectorAll('a.color');
let bg1 = document.querySelector('div.book__control_background');
let bg = bg1.querySelectorAll('a.color');
console.log(fontLink);
console.log(bg);

let fontSizeKey;
let fontSizeKey1;
let fontColor;
let currentFont = 1;
let currentColor = 0;
let currentBg = 2;
for (let i = 0; i < fontLink.length; i++) {
    fontLink[i].addEventListener('click', changeFont);
    textColorLink[i].addEventListener('click', changeFontColor);
    bg[i].addEventListener('click', changeBgColor);
    function changeFont(event) {
        event.preventDefault();
        fontLink[currentFont].classList.remove('font-size_active');
        fontSizeKey = fontLink[currentFont].getAttribute('data-size');
        if (fontSizeKey === 'small') {
            fontSize.classList.remove('book_fs-small');
        } else if (fontSizeKey === 'big') {
            fontSize.classList.remove('book_fs-big');
        };
        


        fontLink[i].classList.add('font-size_active');        
        
        fontSizeKey1 = fontLink[i].getAttribute('data-size');
        console.log(fontSizeKey1);

        if (fontSizeKey1 === 'small') {
            fontSize.classList.add('book_fs-small');
        } else if (fontSizeKey1 === 'big') {
            fontSize.classList.add('book_fs-big');
        };
        currentFont = i;
        
        
    };

    function changeFontColor(event) {
        event.preventDefault();
        textColorLink[currentColor].classList.remove('color_active');
        textColorKey = textColorLink[currentColor].getAttribute('data-color');
        if (textColorKey === 'gray') {
            fontSize.classList.remove('book_color-gray');
        } else if (textColorKey === 'whitesmoke') {
            fontSize.classList.remove('book_color-whitesmoke');
        };
        
        textColorLink[i].classList.add('color_active');        
        textColorKey1 = textColorLink[i].getAttribute('data-color');
        console.log(textColorKey1);

        if (textColorKey1 === 'gray') {
            fontSize.classList.add('book_color-gray');
        } else if (textColorKey1 === 'whitesmoke') {
            fontSize.classList.add('book_color-whitesmoke');
        };
        currentColor = i;

    };

    

    function changeBgColor(event) {
        event.preventDefault();
        bg[currentBg].classList.remove('color_active');
        bgColorKey = bg[currentBg].getAttribute('data-color');
        if (bgColorKey === 'gray') {
            fontSize.classList.remove('book_bg-gray');
        } else if (bgColorKey === 'black') {
            fontSize.classList.remove('book_bg-black');
        };
        
        bg[i].classList.add('color_active');        
        bgColorKey1 = bg[i].getAttribute('data-color');
        console.log(bgColorKey1);

        if (bgColorKey1 === 'gray') {
            fontSize.classList.add('book_bg-gray');
        } else if (bgColorKey1 === 'black') {
            fontSize.classList.add('book_bg-black');
        };
        currentBg = i;

    };

};

