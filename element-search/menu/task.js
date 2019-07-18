let menuLink = document.querySelectorAll('a.menu__link');

let k = 0;
for (let i = 0; i < menuLink.length; i++) {
    

    menuLink[i].onclick = function() {
        
        console.log(k);
        let targetItem = menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub');
        if (targetItem !== null && k === 0) {
            console.log(targetItem.className);
            targetItem.className += ' menu_active';
            console.log(targetItem.className);
            //console.log(menuLink[i].closest('ul.menu_sub').className);
            k = 1;
            return false;
        };

        if (targetItem !== null && k === 1) {
            console.log(targetItem.className);
            targetItem.className = targetItem.className.replace(' menu_active', '');
            console.log(targetItem.className);
            //console.log(menuLink[i].closest('ul.menu_sub').className);
            k = 0;
            return false;
        };
        
    };
};

// menuLink[i].onclick = function() {
        
    //     console.log(k);
    //     if (menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub') !== null && k === 0) {
    //         console.log(menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub').className);
    //         menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub').className += ' menu_active';
    //         console.log(menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub').className);
    //         //console.log(menuLink[i].closest('ul.menu_sub').className);
    //         k = 1;
    //         return false;
    //     };

    //     if (menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub') !== null && k === 1) {
    //         console.log(menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub').className);
    //         menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub').className = menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub').className.replace(' menu_active', '');
    //         console.log(menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub').className);
    //         //console.log(menuLink[i].closest('ul.menu_sub').className);
    //         k = 0;
    //         return false;
    //     };
        
    // };