/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Contacts = (function() {
    function generate() {
        const pageDiv = document.createElement('div');
        pageDiv.id = "contacts-page";
        pageDiv.classList.add("col-container");

        const container = document.createElement('div');
        container.classList.add('col-container');
        pageDiv.appendChild(container);

        const heading = document.createElement('h2');
        heading.textContent = "Contact us"
        container.appendChild(heading);

        const contacts = [
            {
                name: "Chef",
                email: "chef@example.com",
                phone: "+(000) 000-0000",
            },
            {
                name: "Waiter",
                email: "waiter@example.com",
                phone: "+(000) 000-0000",
            },
            {
                name: "Manager",
                email: "hugmanager@example.com",
                phone: "+(000) 000-0000",
            }
        ];

        for (const person of contacts)
        {
            container.appendChild(_makeContact(person));
        }

        return pageDiv;

    }

    function _makeContact(person) {
        const name = document.createElement('h3');
        name.textContent = person.name;

        const email = document.createElement('p');
        email.textContent = person.email;

        const phone = document.createElement('p');
        phone.textContent = person.phone;


        const container = document.createElement('div');
        container.appendChild(name);
        container.appendChild(email);
        container.appendChild(phone);

        return container;
    }

    return { 
        generate,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacts);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Homepage = (function() {
    function generate() {
        const question = document.createElement('p');
        question.id = "question";
        question.textContent = "Have you ever been eating pizza alone with a strong desire to get hugs right now?";


        const description = document.createElement('p');
        description.id = "main-description";
        description.textContent = "Here at PizzaHug you can eat pizza and hug everybody you want.\
        \nEven if you're not eating pizza.";

        
        const homePageDiv = document.createElement('div');
        homePageDiv.id = "home-page";
        homePageDiv.classList.add("col-container");

        homePageDiv.appendChild(question);
        homePageDiv.appendChild(description);

        return homePageDiv;

    }

    return {generate};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Menu = (function() {
    function generate() {
        const page = document.createElement('div');

        page.id = "menu-page";
        page.classList.add("col-container");

        const menuItems = [
            {
                name: "The Pizza Revolution",
                description: "Revolutionary pizza with tomato, basil and love.",
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

        // process menu items
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

        // container for heading and description
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


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
    contactBtn.id = "contacts-btn";

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
    const homepage = _home__WEBPACK_IMPORTED_MODULE_0__["default"].generate();

    homepage.classList.add('current-page');

    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('row-container');

    content.appendChild(header);
    content.appendChild(div);

    div.appendChild(homepage);
    div.appendChild(sidebar);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");





(0,_pageload__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
                    renderPage(_home__WEBPACK_IMPORTED_MODULE_1__["default"].generate());
                    break;
                case "menu-btn":
                    renderPage(_menu__WEBPACK_IMPORTED_MODULE_2__["default"].generate());
                    break;
                case "contacts-btn":
                    renderPage(_contacts__WEBPACK_IMPORTED_MODULE_3__["default"].generate());
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




//должен убрать first-load с #home-page
//очистка туть
//один хендлер для кнопки, в нем внутри функция, куда передается что надо
//должен быть иф, который проверит, что страница уже не сгенерирована.
//добавить класс selected для buttons
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QStCLDBEQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGVkLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0ZWQtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGVkLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGVkLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZW5lcmF0ZWQtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbnRhY3RzID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgICAgICBjb25zdCBwYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhZ2VEaXYuaWQgPSBcImNvbnRhY3RzLXBhZ2VcIjtcbiAgICAgICAgcGFnZURpdi5jbGFzc0xpc3QuYWRkKFwiY29sLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC1jb250YWluZXInKTtcbiAgICAgICAgcGFnZURpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hlZlwiLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBcImNoZWZAZXhhbXBsZS5jb21cIixcbiAgICAgICAgICAgICAgICBwaG9uZTogXCIrKDAwMCkgMDAwLTAwMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJXYWl0ZXJcIixcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJ3YWl0ZXJAZXhhbXBsZS5jb21cIixcbiAgICAgICAgICAgICAgICBwaG9uZTogXCIrKDAwMCkgMDAwLTAwMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJNYW5hZ2VyXCIsXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiaHVnbWFuYWdlckBleGFtcGxlLmNvbVwiLFxuICAgICAgICAgICAgICAgIHBob25lOiBcIisoMDAwKSAwMDAtMDAwMFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAoY29uc3QgcGVyc29uIG9mIGNvbnRhY3RzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX21ha2VDb250YWN0KHBlcnNvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VEaXY7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfbWFrZUNvbnRhY3QocGVyc29uKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcGVyc29uLm5hbWU7XG5cbiAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVtYWlsLnRleHRDb250ZW50ID0gcGVyc29uLmVtYWlsO1xuXG4gICAgICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwaG9uZS50ZXh0Q29udGVudCA9IHBlcnNvbi5waG9uZTtcblxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgZ2VuZXJhdGUsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7IiwiY29uc3QgSG9tZXBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBxdWVzdGlvbi5pZCA9IFwicXVlc3Rpb25cIjtcbiAgICAgICAgcXVlc3Rpb24udGV4dENvbnRlbnQgPSBcIkhhdmUgeW91IGV2ZXIgYmVlbiBlYXRpbmcgcGl6emEgYWxvbmUgd2l0aCBhIHN0cm9uZyBkZXNpcmUgdG8gZ2V0IGh1Z3MgcmlnaHQgbm93P1wiO1xuXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlkID0gXCJtYWluLWRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJIZXJlIGF0IFBpenphSHVnIHlvdSBjYW4gZWF0IHBpenphIGFuZCBodWcgZXZlcnlib2R5IHlvdSB3YW50LlxcXG4gICAgICAgIFxcbkV2ZW4gaWYgeW91J3JlIG5vdCBlYXRpbmcgcGl6emEuXCI7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhvbWVQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVQYWdlRGl2LmlkID0gXCJob21lLXBhZ2VcIjtcbiAgICAgICAgaG9tZVBhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImNvbC1jb250YWluZXJcIik7XG5cbiAgICAgICAgaG9tZVBhZ2VEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb24pO1xuICAgICAgICBob21lUGFnZURpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGhvbWVQYWdlRGl2O1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiLCJjb25zdCBNZW51ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcGFnZS5pZCA9IFwibWVudS1wYWdlXCI7XG4gICAgICAgIHBhZ2UuY2xhc3NMaXN0LmFkZChcImNvbC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVGhlIFBpenphIFJldm9sdXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZXZvbHV0aW9uYXJ5IHBpenphIHdpdGggdG9tYXRvLCBiYXNpbCBhbmQgbG92ZS5cIixcbiAgICAgICAgICAgICAgICBpbWdTcmM6IFwiYXNzZXRzL3BpenphMS5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkhlYXZlbmx5IERlbGlnaHRzXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiV2FudCBtdXNocm9vbXM/IEhlcmUgeW91IGFyZSwgaW5kdWxnZS5cIixcbiAgICAgICAgICAgICAgICBpbWdTcmM6IFwiYXNzZXRzL3BpenphMi5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNoZWVzZSBHYWxvcmVcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNT1JFLCBNT1JFIENIRUVTRSEhISFcIixcbiAgICAgICAgICAgICAgICBpbWdTcmM6IFwiYXNzZXRzL3BpenphMy5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlJlYWwgRGVhbFwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxpdGVyYWxseSBldmVyeXRoaW5nIHVuZGVyIHRoZSBzdW4uXCIsXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBcImFzc2V0cy9waXp6YTQuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcHJvY2VzcyBtZW51IGl0ZW1zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWdlLmFwcGVuZENoaWxkKF9jcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgICAgICBtZW51SXRlbXNbaV0ubmFtZSxcbiAgICAgICAgICAgICAgICBtZW51SXRlbXNbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zW2ldLmltZ1NyY1xuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZU1lbnVJdGVtKG5hbWVTcmMsIGRlc2NyaXB0aW9uU3JjLCBpbWdTcmMpIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyb3ctY29udGFpbmVyXCIsIFwibWVudS1pdGVtXCIpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xuXG4gICAgICAgIC8vIGNvbnRhaW5lciBmb3IgaGVhZGluZyBhbmQgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgaXRlbUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbC1jb250YWluZXJcIiwgXCJpdGVtLWNvbnRlbnRcIik7XG5cblxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnRDb250YWluZXIpO1xuXG5cbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBuYW1lU3JjO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblNyYztcblxuICAgICAgICBpdGVtQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgaXRlbUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBnZW5lcmF0ZSxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsImltcG9ydCBIb21lcGFnZSBmcm9tICcuL2hvbWUnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb2wtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ1BpenphSHVnJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuICAgIGNvbnN0IHBocmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaHJhc2UudGV4dENvbnRlbnQgPSBcIk5vdCBvbmx5IHRhc3R5LCBidXQgcGxlYXNhbnQuLi5cIjtcbiAgICBwaHJhc2UuaWQgPSAncGhyYXNlJztcblxuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBob21lQnRuLmlkID0gXCJob21lLWJ0blwiO1xuICAgIG1lbnVCdG4uaWQgPSBcIm1lbnUtYnRuXCI7XG4gICAgY29udGFjdEJ0bi5pZCA9IFwiY29udGFjdHMtYnRuXCI7XG5cbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0c1wiO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IFtob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuXTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdjb2wtY29udGFpbmVyJyk7XG5cbiAgICAvL2FwcGVuZCB1bCB3aXRoIHRocmVlIGxpIGVhY2ggY29udGFpbmluZyBhIGJ1dHRvblxuICAgIGZvciAoY29uc3QgYnRuIG9mIGJ1dHRvbnMpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdjb2wtY29udGFpbmVyJyk7XG5cblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb2wtY29udGFpbmVyJyk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocGhyYXNlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8qIGZvb3RlciB3aXRoIHRleHQgYW5kIGxpbmsgKi9cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5pZCA9ICdnaXRodWItbGluayc7XG4gICAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vdHdlbnR5c2l4aHVnc1wiO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBcInR3ZW50eXNpeGh1Z3NcIjtcbiAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBjb25zdCBsZWZ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTWFkZSB3aXRoIGxvdmUgYnkgXCIpO1xuICAgIGNvbnN0IHJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIDozXCIpO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxlZnRUZXh0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHJpZ2h0VGV4dCk7XG5cbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29sLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgXG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ2NvbC1jb250YWluZXInKTtcblxuICAgIGFzaWRlLmFwcGVuZENoaWxkKGRpdik7XG4gICAgYXNpZGUuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICBcbiAgICByZXR1cm4gYXNpZGU7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGNyZWF0ZVNpZGViYXIoKTtcbiAgICBjb25zdCBob21lcGFnZSA9IEhvbWVwYWdlLmdlbmVyYXRlKCk7XG5cbiAgICBob21lcGFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdyb3ctY29udGFpbmVyJyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVwYWdlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdCBmcm9tICcuL3BhZ2Vsb2FkJztcbmltcG9ydCBIb21lcGFnZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBDb250YWN0cyBmcm9tICcuL2NvbnRhY3RzJztcblxuaW5pdCgpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBidXR0b25cIikpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuQ2xpY2tIYW5kbGVyKSk7XG4gICAgXG4gICAgY29uc3QgZGVzZWxlY3RBbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBidG4gb2YgYnV0dG9ucykge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidG5DbGlja0hhbmRsZXIoZSkge1xuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7IC8vIGlmIHRoZSBidXR0b24gaXMgbm90IGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgICAgIGRlc2VsZWN0QWxsKCk7XG5cbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTsgLy8gc2VsZWN0IGNsaWNrZWQgYnV0dG9uXG5cbiAgICAgICAgICAgIHN3aXRjaChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJob21lLWJ0blwiOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKEhvbWVwYWdlLmdlbmVyYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWVudS1idG5cIjpcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGFnZShNZW51LmdlbmVyYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY29udGFjdHMtYnRuXCI6XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2UoQ29udGFjdHMuZ2VuZXJhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gcmVuZGVyUGFnZShuZXdQYWdlKSB7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gICAgY29uc3QgcHJldmlvdXNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXBhZ2VcIik7XG4gICAgcHJldmlvdXNQYWdlLnJlbW92ZSgpO1xuXG4gICAgbmV3UGFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcblxuICAgIGFzaWRlLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIG5ld1BhZ2UpO1xufVxuXG5cblxuXG4vL9C00L7Qu9C20LXQvSDRg9Cx0YDQsNGC0YwgZmlyc3QtbG9hZCDRgSAjaG9tZS1wYWdlXG4vL9C+0YfQuNGB0YLQutCwINGC0YPRgtGMXG4vL9C+0LTQuNC9INGF0LXQvdC00LvQtdGAINC00LvRjyDQutC90L7Qv9C60LgsINCyINC90LXQvCDQstC90YPRgtGA0Lgg0YTRg9C90LrRhtC40Y8sINC60YPQtNCwINC/0LXRgNC10LTQsNC10YLRgdGPINGH0YLQviDQvdCw0LTQvlxuLy/QtNC+0LvQttC10L0g0LHRi9GC0Ywg0LjRhCwg0LrQvtGC0L7RgNGL0Lkg0L/RgNC+0LLQtdGA0LjRgiwg0YfRgtC+INGB0YLRgNCw0L3QuNGG0LAg0YPQttC1INC90LUg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90LAuXG4vL9C00L7QsdCw0LLQuNGC0Ywg0LrQu9Cw0YHRgSBzZWxlY3RlZCDQtNC70Y8gYnV0dG9ucyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==