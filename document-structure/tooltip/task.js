let tooltipElem = document.querySelectorAll('a.has-tooltip');
let body = document.querySelector('body');
console.log(tooltipElem);
let k = 0;

console.log(tooltipElem[1].getBoundingClientRect());

for (let i = 0; i < tooltipElem.length; i++) {
    tooltipElem[i].addEventListener('click', tooltipFn);
    function tooltipFn(event) {
        event.preventDefault();
        
        
        if (k === 0) {
            //body.innerHTML = '<div class=\'tooltip\' style=\'left: 0; top: 0\'>Проверка!</div>';
            let div = document.createElement('div');
            div.className = 'tooltip';
            let left = tooltipElem[i].getBoundingClientRect().left;
            let top = tooltipElem[i].getBoundingClientRect().top + tooltipElem[i].getBoundingClientRect().height;
            div.setAttribute('style', '');
            div.style.top = top + 'px';
            div.style.left = left + 'px';
            console.log(left, top , div.getAttribute('style'));
            console.log(div.getAttribute('style'));
            div.innerText = tooltipElem[i].textContent;
            body.insertBefore(div, body.children[0]);
            console.log(div.getBoundingClientRect());
            k = 1;
        } else if (k === 1) {
            console.log('removing');
            let remove = document.querySelector('div.tooltip');
            remove.remove();
            k = 0;
        };

    };
    
};