/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HomePage = (function() {
    function generate() {
        // const hugPic = document.createElement('img');
        // hugPic.src = "./assets/hug.png";
        // hugPic.alt = "two people are hugging";
        // hugPic.id = "hug-pic";

        const question = document.createElement('p');
        question.id = "question";
        question.textContent = "Have you ever been eating pizza alone with a strong desire to get hugs?";

        // const answer = document.createElement('p');
        // answer.id = "answer";
        // answer.textContent = "We are going to solve your problem!";

        const description = document.createElement('p');
        description.id = "main-description";
        description.textContent = "Here at PizzaHug you can eat pizza and hug everybody you want.\
        \nEven if you're not eating pizza.";

        
        const homePageDiv = document.createElement('div');
        homePageDiv.id = "home-page";
        homePageDiv.classList.add("col-container");

        const nodes = {
            question,
            // answer,
            // hugPic,
            description,
        };

        for (const prop in nodes) {
            homePageDiv.appendChild(nodes[prop]);
        }

        return homePageDiv;

    }

    return {generate};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

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
    const homepage = _home__WEBPACK_IMPORTED_MODULE_0__["default"].generate();

    homepage.classList.add('first-load');

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


(0,_pageload__WEBPACK_IMPORTED_MODULE_0__["default"])();

//должен убрать first-load с #home-page
//очистка туть
//один хендлер для кнопки, в нем внутри функция, куда передается что надо
//должен быть иф, который проверит, что страница уже не сгенерирована.
//добавить класс selected для buttons
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDM0NPOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFpQjs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7OztVQzFHbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUIscURBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0ZWQtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGVkLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGVkLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZW5lcmF0ZWQtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhvbWVQYWdlID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgICAgICAvLyBjb25zdCBodWdQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgLy8gaHVnUGljLnNyYyA9IFwiLi9hc3NldHMvaHVnLnBuZ1wiO1xuICAgICAgICAvLyBodWdQaWMuYWx0ID0gXCJ0d28gcGVvcGxlIGFyZSBodWdnaW5nXCI7XG4gICAgICAgIC8vIGh1Z1BpYy5pZCA9IFwiaHVnLXBpY1wiO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBxdWVzdGlvbi5pZCA9IFwicXVlc3Rpb25cIjtcbiAgICAgICAgcXVlc3Rpb24udGV4dENvbnRlbnQgPSBcIkhhdmUgeW91IGV2ZXIgYmVlbiBlYXRpbmcgcGl6emEgYWxvbmUgd2l0aCBhIHN0cm9uZyBkZXNpcmUgdG8gZ2V0IGh1Z3M/XCI7XG5cbiAgICAgICAgLy8gY29uc3QgYW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAvLyBhbnN3ZXIuaWQgPSBcImFuc3dlclwiO1xuICAgICAgICAvLyBhbnN3ZXIudGV4dENvbnRlbnQgPSBcIldlIGFyZSBnb2luZyB0byBzb2x2ZSB5b3VyIHByb2JsZW0hXCI7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlkID0gXCJtYWluLWRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJIZXJlIGF0IFBpenphSHVnIHlvdSBjYW4gZWF0IHBpenphIGFuZCBodWcgZXZlcnlib2R5IHlvdSB3YW50LlxcXG4gICAgICAgIFxcbkV2ZW4gaWYgeW91J3JlIG5vdCBlYXRpbmcgcGl6emEuXCI7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhvbWVQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVQYWdlRGl2LmlkID0gXCJob21lLXBhZ2VcIjtcbiAgICAgICAgaG9tZVBhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImNvbC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSB7XG4gICAgICAgICAgICBxdWVzdGlvbixcbiAgICAgICAgICAgIC8vIGFuc3dlcixcbiAgICAgICAgICAgIC8vIGh1Z1BpYyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBub2Rlcykge1xuICAgICAgICAgICAgaG9tZVBhZ2VEaXYuYXBwZW5kQ2hpbGQobm9kZXNbcHJvcF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhvbWVQYWdlRGl2O1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJpbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9ob21lJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29sLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdQaXp6YUh1Zyc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBwaHJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhyYXNlLnRleHRDb250ZW50ID0gXCJOb3Qgb25seSB0YXN0eSwgYnV0IHBsZWFzYW50Li4uXCI7XG4gICAgcGhyYXNlLmlkID0gJ3BocmFzZSc7XG5cblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaG9tZUJ0bi5pZCA9IFwiaG9tZS1idG5cIjtcbiAgICBtZW51QnRuLmlkID0gXCJtZW51LWJ0blwiO1xuICAgIGNvbnRhY3RCdG4uaWQgPSBcImNvbnRhY3QtYnRuXCI7XG5cbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0c1wiO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IFtob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuXTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdjb2wtY29udGFpbmVyJyk7XG5cbiAgICAvL2FwcGVuZCB1bCB3aXRoIHRocmVlIGxpIGVhY2ggY29udGFpbmluZyBhIGJ1dHRvblxuICAgIGZvciAoY29uc3QgYnRuIG9mIGJ1dHRvbnMpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdjb2wtY29udGFpbmVyJyk7XG5cblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb2wtY29udGFpbmVyJyk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocGhyYXNlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8qIGZvb3RlciB3aXRoIHRleHQgYW5kIGxpbmsgKi9cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5pZCA9ICdnaXRodWItbGluayc7XG4gICAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vdHdlbnR5c2l4aHVnc1wiO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBcInR3ZW50eXNpeGh1Z3NcIjtcbiAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBjb25zdCBsZWZ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTWFkZSB3aXRoIGxvdmUgYnkgXCIpO1xuICAgIGNvbnN0IHJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIDozXCIpO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxlZnRUZXh0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHJpZ2h0VGV4dCk7XG5cbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29sLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgXG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ2NvbC1jb250YWluZXInKTtcblxuICAgIGFzaWRlLmFwcGVuZENoaWxkKGRpdik7XG4gICAgYXNpZGUuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICBcbiAgICByZXR1cm4gYXNpZGU7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGNyZWF0ZVNpZGViYXIoKTtcbiAgICBjb25zdCBob21lcGFnZSA9IEhvbWVQYWdlLmdlbmVyYXRlKCk7XG5cbiAgICBob21lcGFnZS5jbGFzc0xpc3QuYWRkKCdmaXJzdC1sb2FkJyk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncm93LWNvbnRhaW5lcicpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChob21lcGFnZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNpZGViYXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXQgZnJvbSAnLi9wYWdlbG9hZCc7XG5cbmluaXQoKTtcblxuLy/QtNC+0LvQttC10L0g0YPQsdGA0LDRgtGMIGZpcnN0LWxvYWQg0YEgI2hvbWUtcGFnZVxuLy/QvtGH0LjRgdGC0LrQsCDRgtGD0YLRjFxuLy/QvtC00LjQvSDRhdC10L3QtNC70LXRgCDQtNC70Y8g0LrQvdC+0L/QutC4LCDQsiDQvdC10Lwg0LLQvdGD0YLRgNC4INGE0YPQvdC60YbQuNGPLCDQutGD0LTQsCDQv9C10YDQtdC00LDQtdGC0YHRjyDRh9GC0L4g0L3QsNC00L5cbi8v0LTQvtC70LbQtdC9INCx0YvRgtGMINC40YQsINC60L7RgtC+0YDRi9C5INC/0YDQvtCy0LXRgNC40YIsINGH0YLQviDRgdGC0YDQsNC90LjRhtCwINGD0LbQtSDQvdC1INGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdCwLlxuLy/QtNC+0LHQsNCy0LjRgtGMINC60LvQsNGB0YEgc2VsZWN0ZWQg0LTQu9GPIGJ1dHRvbnMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=