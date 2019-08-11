let tasksList = document.querySelector('div.tasks__list');
let input = document.querySelector('input.tasks__input');
let taskRemove = document.querySelectorAll('a.task__remove');
const items = document.querySelector( '.tasks__list' );
let closeLink;
let button = document.querySelector('button.tasks__add');

function addTaskItem() {
    //event.preventDefault();
    let value = input.value.trim();
    if (value === '') {
        alert('нельзя отправить пустое сообщение');
    } else {
        items.insertAdjacentHTML('beforeend', `
        <div class="task">
            <div class="task__title">` +
                value
            + `</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        ` );
        console.log(items.lastElementChild);
    }
    input.value = '';
    closeLink = document.querySelectorAll('a.task__remove');
    console.log(closeLink[closeLink.length - 1]);
    closeLink[closeLink.length - 1].addEventListener('click', removeFn);
};

function addTaskOnEnter(event) {
    if ((13 == event.keyCode)) {
        event.preventDefault();
        console.log('asd');
        addTaskItem();
    };
};

input.addEventListener('keypress', addTaskOnEnter);
button.addEventListener('click', e => {
    e.preventDefault();
    addTaskItem();
});

function removeFn(event) {
    event.preventDefault();
    console.log(event.target);
    event.target.closest('div.task').remove();
};








