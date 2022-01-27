import HomePage from './home';

function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    h1.textContent = 'PizzaHug';

    header.appendChild(h1);

    header.classList.add('row-container');

    return header;
}

function createSidebar() {
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.id = "home-btn";
    menuBtn.id = "menu-btn";
    contactBtn.id = "contact-btn";

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact us";

    const buttons = [homeBtn, menuBtn, contactBtn];

    const ul = document.createElement('ul');
    ul.classList.add('col-container');

    //append ul with three li each containing a button
    for (const btn of buttons) {
        const li = document.createElement('li');
        ul.appendChild(li);

        li.appendChild(btn);
    }

    const nav = document.createElement('nav');

    nav.appendChild(ul);
    nav.classList.add('col-container');

    const aside = document.createElement('aside');
    aside.classList.add('col-container');

    aside.appendChild(nav);


    const footer = document.createElement('footer');
    footer.innerHTML = 'Made with love by <a href="https://github.com/twentysixhugs">twentysixhugs</a> :3';

    aside.appendChild(footer);
    
    return aside;
}

function init() {
    const header = createHeader();
    const sidebar = createSidebar();
    const homepage = HomePage.generate();

    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('row-container');

    content.appendChild(header);
    content.appendChild(div);

    div.appendChild(homepage);
    div.appendChild(sidebar);
}

export default init;