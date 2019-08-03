let tasksList = document.querySelector('div.tasks__list');
let input = document.querySelector('input.tasks__input');
console.log(input.value);
let taskRemove = document.querySelectorAll('a.task__remove');
const items = document.querySelector( '.tasks__list' );

function addTask(event) {
    event.preventDefault();
    if ((13 == event.keyCode)) {
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
        console.log(items.children);
        console.log(items.children[0].children.lastElementChild);
        //addEventLi();
    };
};

input.addEventListener('keyup', addTask);
// function addEventLi() {
//     console.log(items.children.length);
//     lastTask = items.children[items.children.length - 1];
//     //lastTask = items.lastChild;
//     console.log(lastTask);
//     lastTask.querySelector('a').addEventListener('click', removeTask);
// };

// function addEventLi() {
//     for (let i = 0; i < items.children.length; i++) {
//         items.children[i].children[items.children[i].children.length - 1].addEventListener('click', event => {
//             event.preventDefault();
//             console.log('ok');
//             //console.log(items.children[i]);
//             console.log(items.children.length);

//             items.children[i].remove();
//             //console.log(items.children[i]);
//             console.log(items.children.length);

//         });
//     };
//     // function removeTask(event) {
        
//     // };
// };







