let tabs = document.querySelectorAll('div.tab');
let tabContent = document.querySelectorAll('div.tab__content');
for (let i = 0; 0 < tabs.length; i++ ) {
    tabs[i].addEventListener('click', changeTab);
    //console.log(tabs[i]);
    function changeTab() {   
        for (let j = 0; 0 < tabs.length; j++) {
            if (tabs[j].className.includes(' tab_active')){
                tabs[j].className = tabs[j].className.replace(' tab_active', '');
                tabContent[j].className = tabContent[j].className.replace(' tab__content_active', '');
                tabs[i].className += ' tab_active'; 
                tabContent[i].className += ' tab__content_active'; 
            };
        };

    };
};
