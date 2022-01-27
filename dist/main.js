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
        const phrase = document.createElement('p');
        phrase.textContent = "Not only tasty, but pleasant...";
        phrase.id = 'phrase';

        const hugPic = document.createElement('img');
        hugPic.src = "./assets/hug.png";
        hugPic.alt = "two people are hugging";
        hugPic.id = "hug-pic";

        const question = document.createElement('p');
        question.id = "question";
        question.textContent = "Have you ever been eating pizza alone with a strong desire to get hugs?";

        const answer = document.createElement('p');
        answer.id = "answer";
        answer.textContent = "We are going to solve your problem!";

        const description = document.createElement('p');
        description.id = "main-description";
        description.textContent = "Here at PizzaHug you can eat pizza and hug everybody you want.\
         Even if you don't eat pizza.";

        
        const homePageDiv = document.createElement('div');
        homePageDiv.id = "home-page";
        homePageDiv.classList.add("col-container");

        const nodes = {
            phrase,
            hugPic,
            question,
            answer,
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
    const h1 = document.createElement('h1');

    h1.textContent = 'PizzaHug';

    header.appendChild(h1);

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
    const homepage = _home__WEBPACK_IMPORTED_MODULE_0__["default"].generate();

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

//очистка туть
//один хендлер для кнопки, в нем внутри функция, куда передается что надо
//должен быть иф, который проверит, что страница уже не сгенерирована.
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDaERPOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFpQjs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7OztVQzFFbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUIscURBQUk7O0FBRUo7QUFDQTtBQUNBLHNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VuZXJhdGVkLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGVkLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nZW5lcmF0ZWQtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nZW5lcmF0ZWQtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGVkLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dlbmVyYXRlZC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSG9tZVBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgICAgIGNvbnN0IHBocmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGhyYXNlLnRleHRDb250ZW50ID0gXCJOb3Qgb25seSB0YXN0eSwgYnV0IHBsZWFzYW50Li4uXCI7XG4gICAgICAgIHBocmFzZS5pZCA9ICdwaHJhc2UnO1xuXG4gICAgICAgIGNvbnN0IGh1Z1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBodWdQaWMuc3JjID0gXCIuL2Fzc2V0cy9odWcucG5nXCI7XG4gICAgICAgIGh1Z1BpYy5hbHQgPSBcInR3byBwZW9wbGUgYXJlIGh1Z2dpbmdcIjtcbiAgICAgICAgaHVnUGljLmlkID0gXCJodWctcGljXCI7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHF1ZXN0aW9uLmlkID0gXCJxdWVzdGlvblwiO1xuICAgICAgICBxdWVzdGlvbi50ZXh0Q29udGVudCA9IFwiSGF2ZSB5b3UgZXZlciBiZWVuIGVhdGluZyBwaXp6YSBhbG9uZSB3aXRoIGEgc3Ryb25nIGRlc2lyZSB0byBnZXQgaHVncz9cIjtcblxuICAgICAgICBjb25zdCBhbnN3ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFuc3dlci5pZCA9IFwiYW5zd2VyXCI7XG4gICAgICAgIGFuc3dlci50ZXh0Q29udGVudCA9IFwiV2UgYXJlIGdvaW5nIHRvIHNvbHZlIHlvdXIgcHJvYmxlbSFcIjtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaWQgPSBcIm1haW4tZGVzY3JpcHRpb25cIjtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkhlcmUgYXQgUGl6emFIdWcgeW91IGNhbiBlYXQgcGl6emEgYW5kIGh1ZyBldmVyeWJvZHkgeW91IHdhbnQuXFxcbiAgICAgICAgIEV2ZW4gaWYgeW91IGRvbid0IGVhdCBwaXp6YS5cIjtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgaG9tZVBhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZVBhZ2VEaXYuaWQgPSBcImhvbWUtcGFnZVwiO1xuICAgICAgICBob21lUGFnZURpdi5jbGFzc0xpc3QuYWRkKFwiY29sLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IHtcbiAgICAgICAgICAgIHBocmFzZSxcbiAgICAgICAgICAgIGh1Z1BpYyxcbiAgICAgICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICAgICAgYW5zd2VyLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIG5vZGVzKSB7XG4gICAgICAgICAgICBob21lUGFnZURpdi5hcHBlbmRDaGlsZChub2Rlc1twcm9wXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaG9tZVBhZ2VEaXY7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2dlbmVyYXRlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyIsImltcG9ydCBIb21lUGFnZSBmcm9tICcuL2hvbWUnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgaDEudGV4dENvbnRlbnQgPSAnUGl6emFIdWcnO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBob21lQnRuLmlkID0gXCJob21lLWJ0blwiO1xuICAgIG1lbnVCdG4uaWQgPSBcIm1lbnUtYnRuXCI7XG4gICAgY29udGFjdEJ0bi5pZCA9IFwiY29udGFjdC1idG5cIjtcblxuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IFtob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuXTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdjb2wtY29udGFpbmVyJyk7XG5cbiAgICAvL2FwcGVuZCB1bCB3aXRoIHRocmVlIGxpIGVhY2ggY29udGFpbmluZyBhIGJ1dHRvblxuICAgIGZvciAoY29uc3QgYnRuIG9mIGJ1dHRvbnMpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2NvbC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdjb2wtY29udGFpbmVyJyk7XG5cbiAgICBhc2lkZS5hcHBlbmRDaGlsZChuYXYpO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJ01hZGUgd2l0aCBsb3ZlIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdHdlbnR5c2l4aHVnc1wiPnR3ZW50eXNpeGh1Z3M8L2E+IDozJztcblxuICAgIGFzaWRlLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgXG4gICAgcmV0dXJuIGFzaWRlO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBjcmVhdGVTaWRlYmFyKCk7XG4gICAgY29uc3QgaG9tZXBhZ2UgPSBIb21lUGFnZS5nZW5lcmF0ZSgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Jvdy1jb250YWluZXInKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0IGZyb20gJy4vcGFnZWxvYWQnO1xuXG5pbml0KCk7XG5cbi8v0L7Rh9C40YHRgtC60LAg0YLRg9GC0Yxcbi8v0L7QtNC40L0g0YXQtdC90LTQu9C10YAg0LTQu9GPINC60L3QvtC/0LrQuCwg0LIg0L3QtdC8INCy0L3Rg9GC0YDQuCDRhNGD0L3QutGG0LjRjywg0LrRg9C00LAg0L/QtdGA0LXQtNCw0LXRgtGB0Y8g0YfRgtC+INC90LDQtNC+XG4vL9C00L7Qu9C20LXQvSDQsdGL0YLRjCDQuNGELCDQutC+0YLQvtGA0YvQuSDQv9GA0L7QstC10YDQuNGCLCDRh9GC0L4g0YHRgtGA0LDQvdC40YbQsCDRg9C20LUg0L3QtSDRgdCz0LXQvdC10YDQuNGA0L7QstCw0L3QsC4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=