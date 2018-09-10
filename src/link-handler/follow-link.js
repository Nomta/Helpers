'use strict';

var dom 		= require('../dom-cache'),
	helpers 	= require('../dom-helpers'),
	leafOver 	= require('./leaf-over'),
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
		
		if (callback) callback(target);
	})
}