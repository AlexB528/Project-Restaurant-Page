/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact (container) {
    const contactTitle = document.createElement('h1');
    var infoUL = document.createElement('ul');
    var listItems = [];

    for (let i = 0; i < 5; i ++) {
        listItems[i] = document.createElement('li');
        infoUL.appendChild(listItems[i]);
    }

    listItems[0].innerText = 'Phone: 416-333-333';
    listItems[1].innerText = 'Email: alexburger@gmail.com';
    listItems[2].innerText = 'Addres: 55 Carson Ave.';

    
    contactTitle.classList.add('hdr');

    contactTitle.innerText = 'Contact Information';

    container.appendChild(contactTitle);
    container.appendChild(infoUL);
}

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var _newPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newPage.js */ "./src/newPage.js");


function load () {
    
    var contentDiv = document.getElementById('content');

    while (contentDiv.lastElementChild) {
        contentDiv.removeChild(contentDiv.lastElementChild);
    }

    var container = document.createElement('div');

    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabsContainer');

    const header = document.createElement('h1');
    const par = document.createElement('p');

    let tabs = [];

    for (let i = 0; i <3; i++) {
        tabs[i] = document.createElement('div');
        tabs[i].classList.add('tab');
        tabs[i].addEventListener('click', function (e) {
            (0,_newPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e,container);
        });
    }

    tabs[0].innerHTML = 'Home';
    tabs[1].innerHTML = 'Menu';
    tabs[2].innerHTML = 'Contact';

    header.classList.add('hdr');

    header.innerHTML = 'Alexs Burger Joint';

    contentDiv.appendChild(tabsContainer);
    tabs.forEach(tab => tabsContainer.appendChild(tab));
    contentDiv.appendChild(container);
    container.appendChild(header);
    container.appendChild(par);


}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu (container) {
    const appsTitle = document.createElement('h1');
    const mainsTitle = document.createElement('h1');
    const appsUL = document.createElement('ul');
    const mainsUL = document.createElement('ul');
    const dessertsTitle = document.createElement('h1');
    const dessertsUL = document.createElement('ul');

    var apps = [];
    var mains = [];
    var desserts = [];

    for (let i = 0; i < 5; i ++) {
        apps[i] = document.createElement('li');
        appsUL.appendChild(apps[i]);
    }

    apps[0].innerText = 'Calamari';
    apps[1].innerText = 'Salad';
    apps[2].innerText = 'Chorizo sausage';
    apps[3].innerText = 'Wings';
    apps[4].innerText = 'Cold cuts and cheese';

    for (let i = 0; i < 3; i ++) {
        mains[i] = document.createElement('li');
        mainsUL.appendChild(mains[i]);
    }

    mains[0].innerText = 'Steak';
    mains[1].innerText = 'Burger';
    mains[2].innerText = 'Pizza';

    for (let i = 0; i < 3; i ++) {
        desserts[i] = document.createElement('li');
        dessertsUL.appendChild(desserts[i]);
    }

    desserts[0].innerText = 'Chocolate ice cream';
    desserts[1].innerText = 'Vanilla ice cream';
    desserts[2].innerText = 'Strawberry ice cream';

    appsTitle.classList.add('hdr');
    mainsTitle.classList.add('hdr');
    dessertsTitle.classList.add('hdr');

    appsTitle.innerText = 'Appetizers';
    mainsTitle.innerText = 'Mains';
    dessertsTitle.innerText = 'Desserts';

    container.appendChild(appsTitle);
    container.appendChild(appsUL);
    container.appendChild(mainsTitle);
    container.appendChild(mainsUL);
    container.appendChild(dessertsTitle);
    container.appendChild(dessertsUL);

}

/***/ }),

/***/ "./src/newPage.js":
/*!************************!*\
  !*** ./src/newPage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newPage)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.js */ "./src/load.js");




function newPage (e,container) {
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
    if (e.target.innerText == 'Menu') {
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])(container);
    }
    if (e.target.innerText == 'Contact') {
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])(container);
    }
    if (e.target.innerText == 'Home') {
        (0,_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }


}

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/load.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQm1DOztBQUVwQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFPO0FBQ25CLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDM0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEQ2QjtBQUNNO0FBQ047O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQUk7QUFDWjtBQUNBO0FBQ0EsUUFBUSx1REFBTztBQUNmO0FBQ0E7QUFDQSxRQUFRLG9EQUFJO0FBQ1o7OztBQUdBOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uZXdQYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdmFyIGluZm9VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdmFyIGxpc3RJdGVtcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICsrKSB7XG4gICAgICAgIGxpc3RJdGVtc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGluZm9VTC5hcHBlbmRDaGlsZChsaXN0SXRlbXNbaV0pO1xuICAgIH1cblxuICAgIGxpc3RJdGVtc1swXS5pbm5lclRleHQgPSAnUGhvbmU6IDQxNi0zMzMtMzMzJztcbiAgICBsaXN0SXRlbXNbMV0uaW5uZXJUZXh0ID0gJ0VtYWlsOiBhbGV4YnVyZ2VyQGdtYWlsLmNvbSc7XG4gICAgbGlzdEl0ZW1zWzJdLmlubmVyVGV4dCA9ICdBZGRyZXM6IDU1IENhcnNvbiBBdmUuJztcblxuICAgIFxuICAgIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZHInKTtcblxuICAgIGNvbnRhY3RUaXRsZS5pbm5lclRleHQgPSAnQ29udGFjdCBJbmZvcm1hdGlvbic7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1VMKTtcbn0iLCJpbXBvcnQgbmV3UGFnZSBmcm9tICcuL25ld1BhZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkICgpIHtcbiAgICBcbiAgICB2YXIgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICB3aGlsZSAoY29udGVudERpdi5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFic0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJzQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGxldCB0YWJzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8MzsgaSsrKSB7XG4gICAgICAgIHRhYnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFic1tpXS5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgdGFic1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBuZXdQYWdlKGUsY29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGFic1swXS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgdGFic1sxXS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgdGFic1syXS5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG5cbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGRyJyk7XG5cbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ0FsZXhzIEJ1cmdlciBKb2ludCc7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhYnNDb250YWluZXIpO1xuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcik7XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFwcHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgbWFpbnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgYXBwc1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBtYWluc1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBkZXNzZXJ0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBkZXNzZXJ0c1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIHZhciBhcHBzID0gW107XG4gICAgdmFyIG1haW5zID0gW107XG4gICAgdmFyIGRlc3NlcnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKyspIHtcbiAgICAgICAgYXBwc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGFwcHNVTC5hcHBlbmRDaGlsZChhcHBzW2ldKTtcbiAgICB9XG5cbiAgICBhcHBzWzBdLmlubmVyVGV4dCA9ICdDYWxhbWFyaSc7XG4gICAgYXBwc1sxXS5pbm5lclRleHQgPSAnU2FsYWQnO1xuICAgIGFwcHNbMl0uaW5uZXJUZXh0ID0gJ0Nob3Jpem8gc2F1c2FnZSc7XG4gICAgYXBwc1szXS5pbm5lclRleHQgPSAnV2luZ3MnO1xuICAgIGFwcHNbNF0uaW5uZXJUZXh0ID0gJ0NvbGQgY3V0cyBhbmQgY2hlZXNlJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArKykge1xuICAgICAgICBtYWluc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG1haW5zVUwuYXBwZW5kQ2hpbGQobWFpbnNbaV0pO1xuICAgIH1cblxuICAgIG1haW5zWzBdLmlubmVyVGV4dCA9ICdTdGVhayc7XG4gICAgbWFpbnNbMV0uaW5uZXJUZXh0ID0gJ0J1cmdlcic7XG4gICAgbWFpbnNbMl0uaW5uZXJUZXh0ID0gJ1BpenphJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArKykge1xuICAgICAgICBkZXNzZXJ0c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGRlc3NlcnRzVUwuYXBwZW5kQ2hpbGQoZGVzc2VydHNbaV0pO1xuICAgIH1cblxuICAgIGRlc3NlcnRzWzBdLmlubmVyVGV4dCA9ICdDaG9jb2xhdGUgaWNlIGNyZWFtJztcbiAgICBkZXNzZXJ0c1sxXS5pbm5lclRleHQgPSAnVmFuaWxsYSBpY2UgY3JlYW0nO1xuICAgIGRlc3NlcnRzWzJdLmlubmVyVGV4dCA9ICdTdHJhd2JlcnJ5IGljZSBjcmVhbSc7XG5cbiAgICBhcHBzVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGRyJyk7XG4gICAgbWFpbnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZHInKTtcbiAgICBkZXNzZXJ0c1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2hkcicpO1xuXG4gICAgYXBwc1RpdGxlLmlubmVyVGV4dCA9ICdBcHBldGl6ZXJzJztcbiAgICBtYWluc1RpdGxlLmlubmVyVGV4dCA9ICdNYWlucyc7XG4gICAgZGVzc2VydHNUaXRsZS5pbm5lclRleHQgPSAnRGVzc2VydHMnO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFwcHNUaXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFwcHNVTCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5zVGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluc1VMKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydHNUaXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRzVUwpO1xuXG59IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQYWdlIChlLGNvbnRhaW5lcikge1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PSAnTWVudScpIHtcbiAgICAgICAgbWVudShjb250YWluZXIpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09ICdDb250YWN0Jykge1xuICAgICAgICBjb250YWN0KGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT0gJ0hvbWUnKSB7XG4gICAgICAgIGxvYWQoKTtcbiAgICB9XG5cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbG9hZC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==