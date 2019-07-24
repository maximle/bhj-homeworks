let dropValue = document.querySelector('div.dropdown__value');
let ulDrop = document.querySelector('ul.dropdown__list');
let k = 0;
let links = document.querySelectorAll('a');
console.log(links);


dropValue.addEventListener('click', ulDropFn);

function ulDropFn(event) {
    console.log(k, 'pered');
    if (k === 0) {
        console.log('k = 0');
        ulDrop.className += ' dropdown__list_active';
        k = 1;
        console.log(ulDrop.className);
        console.log(k);
        return;
    } else if (k === 1) {
        console.log('k = 1');

        ulDrop.className = ulDrop.className.replace(' dropdown__list_active', '');
        k = 0;
        console.log(ulDrop.className);
        console.log(k);
        return;
    }; 
    
    event.preventDefault();

    


};
//console.log(links[1]);

for (let i = 0; i < links.length; i++ ) {
    //console.log(links[i]);
    links[i].addEventListener('click', changerFn);
    function changerFn(event) {
        console.log('ok');
        event.preventDefault();
        dropValue.textContent = links[i].textContent; 
        ulDropFn();
  
    };
};