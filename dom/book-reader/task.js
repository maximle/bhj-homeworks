let fontLink = document.querySelectorAll('a.font-size');
let fontSize = document.querySelector('div.book');

console.log(fontLink);
console.log(fontSize);

let fontSizeKey;
let fontSizeKey1;

currentFont = 1;

for (let i = 0; i < fontLink.length; i++) {
    fontLink[i].addEventListener('click', changeFont);
    
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

};

