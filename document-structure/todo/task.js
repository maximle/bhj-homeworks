let tasksList = document.querySelector('div.tasks__list');
let input = document.querySelector('input.tasks__input');
console.log(input.value);
let taskRemove = document.querySelectorAll('a.task__remove');
const items = document.querySelector( '.tasks__list' );

function addTask(event) {
    //event.preventDefault();
    if ((13 == event.keyCode)) {
        event.preventDefault();
        
        let value = input.value.trim();
        
        if (value === '') {
            alert('нельзя отправить пустое сообщение');
        } else {
            items.innerHTML += `
            <div class="task">
                <div class="task__title">` +
                    value
                + `</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
            `;
        }
        input.value = '';
        //console.log(items.children[items.children.length - 1].children[items.children[items.children.length - 1].children.length - 1]);
        //items.children[items.children.length - 1].children[items.children[items.children.length - 1].children.length - 1].addEventListener('click', removeFn)
        //console.log(items.children[0].children.lastElementChild);
        //console.log(event.currentTarget);
        //addEventLi();
        

    };
};

input.addEventListener('keypress', addTask);
items.addEventListener('click', removeFn);



function removeFn(event) {
    event.preventDefault();
    console.log(event.target);
    event.target.closest('div.task').remove();
};








