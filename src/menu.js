const Menu = (function() {
    function generate() {
        const page = document.createElement('div');
        page.id = "menu-page";
        page.classList.add("col-container");

        const menuItems = [
            {
                name: "The Pizza Revolution",
                description: "Revolutionary pizza with tomato and basil.",
                imgSrc: "assets/pizza1.jpg"
            },
            {
                name: "Heavenly Delights",
                description: "Want mushrooms? Here you are, indulge.",
                imgSrc: "assets/pizza2.jpg"
            },
            {
                name: "Cheese Galore",
                description: "MORE, MORE CHEESE!!!!",
                imgSrc: "assets/pizza3.jpg"
            },
            {
                name: "Real Deal",
                description: "Literally everything under the sun.",
                imgSrc: "assets/pizza4.jpg"
            },
        ];

        //process menu items
        for (let i = 0; i < menuItems.length; i++) {
            page.appendChild(_createMenuItem(
                menuItems[i].name,
                menuItems[i].description,
                menuItems[i].imgSrc
                ));
        }

        return page;
    }

    function _createMenuItem(nameSrc, descriptionSrc, imgSrc) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add("row-container", "menu-item");

        const img = document.createElement('img');
        img.src = imgSrc;

        //container for heading and description
        const itemContentContainer = document.createElement('div');
        itemContentContainer.classList.add("col-container", "item-content");


        itemContainer.appendChild(img);
        itemContainer.appendChild(itemContentContainer);


        const heading = document.createElement('h2');
        heading.textContent = nameSrc;

        const description = document.createElement('p');
        description.classList.add("item-description");
        description.textContent = descriptionSrc;

        itemContentContainer.appendChild(heading);
        itemContentContainer.appendChild(description);

        return itemContainer;
    }

    return { 
        generate,
    }
})();

export default Menu;