'use strict';

var helpers 	= require('../dom-helpers'),
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