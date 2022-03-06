import init from './pageload';
import Homepage from './home';
import Menu from './menu';
import Contacts from './contacts';

init();

window.onload = function() {
    const buttons = Array.from(document.querySelectorAll("nav button"));
    buttons.forEach(btn => btn.addEventListener('click', btnClickHandler));
    
    const deselectAll = function() {
        for (const btn of buttons) {
            btn.classList.remove('selected');
        }
    }

    function btnClickHandler(e) {
        if (!e.target.classList.contains("selected")) { // if the button is not already selected
            deselectAll();

            e.target.classList.add("selected"); // select clicked button

            switch(e.target.id) {
                case "home-btn":
                    renderPage(Homepage.generate());
                    break;
                case "menu-btn":
                    renderPage(Menu.generate());
                    break;
                case "contacts-btn":
                    renderPage(Contacts.generate());
                    break;
            }
        }
    }
};

function renderPage(newPage) {
    const aside = document.querySelector("aside");
    const previousPage = document.querySelector(".current-page");
    previousPage.remove();

    newPage.classList.add('current-page');

    aside.insertAdjacentElement("beforebegin", newPage);
}
