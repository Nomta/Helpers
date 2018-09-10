var linkHandler =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	createElement: 			__webpack_require__(6),
	delegate: 				__webpack_require__(7),
	getNodeFromSelector: 	__webpack_require__(1).getNode,
	getNodesFromSelector:	__webpack_require__(1).getNodes,
	toggleClass: 			__webpack_require__(8)
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	getNode: getNodesWith('querySelector'),
	getNodes: getNodesWith('querySelectorAll')
}

function getNodesWith(f) {
	return function(value) {
		if (typeof value === 'string') return document[f](value);
		return value;
	}
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helpers 	= __webpack_require__(0),
	getNode 	= helpers.getNodeFromSelector,
	getNodes 	= helpers.getNodesFromSelector;

/** 
 * Functions for switching tabs
 * @param targetElement: an element to be opened.
 * @param elementsToHide: elements that need to be hidden.
 * 
 */	

module.exports = function leafOver(elementsToHide, targetElement) {
	
	var elementsToHide 	= getNodes(elementsToHide), 
		targetElement 	= getNode(targetElement);
	
	if ('hidden' in HTMLElement.prototype) {
		Array.prototype.forEach.call(elementsToHide, function(element) {
			element.setAttribute('hidden', '');
		});
		targetElement.removeAttribute('hidden');
		return;
	}
	
	Array.prototype.forEach.call(elementsToHide, function(element) {
		element.classList.add('hidden');
	});
	targetElement.classList.remove('hidden');
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

 
module.exports = {
	followLink: __webpack_require__(4),
	leafOver: 	__webpack_require__(2)
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dom 		= __webpack_require__(5),
	helpers 	= __webpack_require__(0),
	leafOver 	= __webpack_require__(2),
	delegate 	= helpers.delegate;

/** 
 * Декоратор для функции leafOver. 
 * Переход будет произведен на элемент, на который указывает атрибут href
 * (при условии, что у элемента, на котором был клик, есть этот атрибут)
 * Обработчик ставится на родителя.
 */


module.exports = function(selector, callback) {
	
	delegate('a.link', event, function(link) {
	
		var href = link.getAttribute('href');
		
		if (!href) return;
		
		var	elementsToHide 	= dom.queryAll(selector),
			targetElement 	= dom.query(href);
			
		leafOver(elementsToHide, targetElement);
		
		if (callback) callback();
	})
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};

module.exports = {
	query 		: queryWidth('querySelector'),
	queryAll 	: queryWidth('querySelectorAll')
}
	
	
function queryWidth(f) {
	return function(selector, element) {
		
		if (cache[selector]) return cache[selector]; 
		
		var element 	= element || document;
		cache[selector] = element[f](selector);
		
		return cache[selector];
	}
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(nodeName, attrs, content) {
	
	var elem = document.createElement(nodeName);
	
	if (typeof attrs === 'string') 
		elem.className = attrs;
	
	else if (attrs) 
		for (var key in attrs) 
			if (attrs.hasOwnProperty(key)) {
				if (key === 'className') 
					elem.className = attrs[key];
				else 
					elem.setAttribute(key, attrs[key]);
			}
	
	if (content) 
		elem.innerHTML = content;
	
	return elem;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(selector, event, callback) {
	
	var target 	= event.target,
		elem 	= target.closest(selector);	
	
	if (!elem) return;

	callback(elem, event);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(elem, current, target) {
	
	elem.classList.remove(current);
	if (target) elem.classList.add(target);
}

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map