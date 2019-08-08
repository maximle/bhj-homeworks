let tasksList = document.querySelector('div.tasks__list');
let input = document.querySelector('input.tasks__input');
console.log(input.value);
let taskRemove = document.querySelectorAll('a.task__remove');
const items = document.querySelector( '.tasks__list' );
let closeLink;
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
        //items.children[items.children.length - 1].children[items.children[items.children.length - 1].children.length - 1].addEventListener('click', removeFn);
        //closeLink = document.querySelectorAll('a.task__remove');
        //console.log(closeLink);
        //console.log(closeLink[closeLink.length - 1]);
        //closeLink[closeLink.length - 1].addEventListener('click', removeFn);
        for (let i = 0; i < closeLink.length; i++) {
            closeLink[i].addEventListener('click', removeFn);
        };
    };
};

input.addEventListener('keypress', addTask);


function removeFn(event) {
    event.preventDefault();
    console.log(event.target);
    event.target.closest('div.task').remove();
};








