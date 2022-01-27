import HomePage from './home';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add("col-container");

    const h1 = document.createElement('h1');
    h1.textContent = 'PizzaHug';

    header.appendChild(h1);

    return header;
}

function createSidebar() {
    const phrase = document.createElement('p');
    phrase.textContent = "Not only tasty, but pleasant...";
    phrase.id = 'phrase';


    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.id = "home-btn";
    menuBtn.id = "menu-btn";
    contactBtn.id = "contact-btn";

    homeBtn.textContent = "Home";
    homeBtn.classList.add('selected');
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contacts";

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


    const div = document.createElement('div');
    div.classList.add('col-container');

    div.appendChild(phrase);
    div.appendChild(nav);

    /* footer with text and link */
    const footer = document.createElement('footer');

    const link = document.createElement('a');
    link.id = 'github-link';
    link.href = "https://github.com/twentysixhugs";
    link.textContent = "twentysixhugs";
    link.target = "_blank";

    const leftText = document.createTextNode("Made with love by ");
    const rightText = document.createTextNode(" :3");

    footer.appendChild(leftText);
    footer.appendChild(link);
    footer.appendChild(rightText);

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('col-container');
    
    footerDiv.appendChild(footer);

    
    const aside = document.createElement('aside');
    aside.classList.add('col-container');

    aside.appendChild(div);
    aside.appendChild(footerDiv);
    
    return aside;
}

function init() {
    const header = createHeader();
    const sidebar = createSidebar();
    const homepage = HomePage.generate();

    homepage.classList.add('first-load');

    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('row-container');

    content.appendChild(header);
    content.appendChild(div);

    div.appendChild(homepage);
    div.appendChild(sidebar);
}

export default init;