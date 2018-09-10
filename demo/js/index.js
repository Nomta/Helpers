(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
},{}],2:[function(require,module,exports){
'use strict';

module.exports = function(selector, event, callback) {
	
	var target 	= event.target,
		elem 	= target.closest(selector);	
	
	if (!elem) return;

	callback(elem, event);
}
},{}],3:[function(require,module,exports){
'use strict';

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
},{}],4:[function(require,module,exports){
'use strict';

module.exports = {
	delegate: 				require('./delegate'),
	getNodeFromSelector: 	require('./get-nodes').getNode,
	getNodesFromSelector:	require('./get-nodes').getNodes
}
},{"./delegate":2,"./get-nodes":3}],5:[function(require,module,exports){
'use strict';

module.exports = {
	dom: 			require('./dom-cache'),
	linkHandler: 	require('./link-handler')
}
},{"./dom-cache":1,"./link-handler":6}],6:[function(require,module,exports){
'use strict';
 
module.exports = {
	leafOver: 	require('./leaf-over')
}
},{"./leaf-over":7}],7:[function(require,module,exports){
'use strict';

var helpers 	= require('../dom-helpers'),
	getNode 	= helpers.getNodeFromSelector,
	getNodes 	= helpers.getNodesFromSelector;

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
},{"../dom-helpers":4}],8:[function(require,module,exports){
'use strict';

var Helpers 	= require('./Helpers'),
	linkHandler = Helpers.linkHandler,
	dom			= Helpers.dom;
	
var prev 	= dom.query('#prev'),
	next 	= dom.query('#next');
	
var images 	= dom.queryAll('section'),
	count 	= images.length;
	
next.onclick = function() {
	var index = getIndex();
	if (index < count) linkTo(++index);
}
	
prev.onclick = function() {
	var index = getIndex();
	if (index > 1) linkTo(--index);
}

function getIndex() {
	var element = document.querySelector('section:not([hidden])');
	return element.dataset.index;
}

function linkTo(index) {
	linkHandler.leafOver(images, dom.query('section[data-index="' + index + '"]'));
}
},{"./Helpers":5}]},{},[8]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgSGVscGVycyBcdD0gcmVxdWlyZSgnLi9IZWxwZXJzJyksXHJcblx0bGlua0hhbmRsZXIgPSBIZWxwZXJzLmxpbmtIYW5kbGVyLFxyXG5cdGRvbVx0XHRcdD0gSGVscGVycy5kb207XHJcblx0XHJcbnZhciBwcmV2IFx0PSBkb20ucXVlcnkoJyNwcmV2JyksXHJcblx0bmV4dCBcdD0gZG9tLnF1ZXJ5KCcjbmV4dCcpO1xyXG5cdFxyXG52YXIgaW1hZ2VzIFx0PSBkb20ucXVlcnlBbGwoJ3NlY3Rpb24nKSxcclxuXHRjb3VudCBcdD0gaW1hZ2VzLmxlbmd0aDtcclxuXHRcclxubmV4dC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGluZGV4ID0gZ2V0SW5kZXgoKTtcclxuXHRpZiAoaW5kZXggPCBjb3VudCkgbGlua1RvKCsraW5kZXgpO1xyXG59XHJcblx0XHJcbnByZXYub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBpbmRleCA9IGdldEluZGV4KCk7XHJcblx0aWYgKGluZGV4ID4gMSkgbGlua1RvKC0taW5kZXgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbmRleCgpIHtcclxuXHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb246bm90KFtoaWRkZW5dKScpO1xyXG5cdHJldHVybiBlbGVtZW50LmRhdGFzZXQuaW5kZXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpbmtUbyhpbmRleCkge1xyXG5cdGxpbmtIYW5kbGVyLmxlYWZPdmVyKGltYWdlcywgZG9tLnF1ZXJ5KCdzZWN0aW9uW2RhdGEtaW5kZXg9XCInICsgaW5kZXggKyAnXCJdJykpO1xyXG59Il0sImZpbGUiOiJpbmRleC5qcyJ9
