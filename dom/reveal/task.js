let pageBody = document.querySelector('html');
let elmt = document.querySelector('div.reveal');
console.log(pageBody);
let elmnts = document.querySelectorAll('div.reveal');
console.log(elmnts);

window.addEventListener('scroll', scrollFn2);


// pageBody.addEventListener('click', scrollFn);
// function scrollFn() {
//     alert(pageBody.scrollTop, window.innerHeight);
//     console.log(window.innerHeight);
//     console.log(elmt.getBoundingClientRect().top, elmt.getBoundingClientRect().bottom, elmt.textContent);
//     console.log(isInViewport(elmt));

// };

function scrollFn2() {
    console.log(isInViewport(elmnts[0]));
    for (let i = 0; i < elmnts.length; i++) {

        if ((isInViewport(elmnts[i]))) {
            if (!elmnts[i].classList.contains('reveal_active')) {
                elmnts[i].classList.add('reveal_active');
            };
        };
  
    };
};


let isInViewport = function(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    
    return elementBottom < viewportHeight && elementTop > 0 ? true : false; 
};