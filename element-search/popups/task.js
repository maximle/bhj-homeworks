let modalMain = document.getElementById('modal_main');
console.log(modalMain);
modalMain.className += ' modal_active';

let modalClose = Array.from(document.querySelectorAll('div.modal__close'))[0];
modalClose.onclick = function() {
    modalMain.className = 'modal';
};

let showSuccess = document.querySelector('a.show-success');
let modalSuccess = document.getElementById('modal_success');
showSuccess.onclick = function() {
    modalMain.className = 'modal';
    modalSuccess.className += ' modal_active';
};
