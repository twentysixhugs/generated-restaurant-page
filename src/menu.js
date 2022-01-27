const Menu = (function() {
    function generate() {
        const el = document.createElement('div');
        el.id = "menu-page";

        const menuItems = [
            {
                name: "The Pizza Revolution",
                description: "Revolutionary pizza with tomato and basil.",
                imgSrc: "assets/pizza1.png"
            },
            {
                name: "Heavenly Delights",
                description: "Want mushrooms? Here you are, indulge.",
                imgSrc: "assets/pizza2.png"
            },
            {
                name: "Cheese Galore",
                description: "MORE, MORE CHEESE!!!!",
                imgSrc: "assets/pizza3.png"
            },
            {
                name: "Real Deal",
                description: "Literally everything under the sun.",
                imgSrc: "assets/pizza4.png"
            },
        ];

        //process menu items
        

        //appendChilds...

        return el;
    }

    function _createMenuItem(heading, description, img) {

    }

    return { 
        generate,
    }
})();

export default Menu;