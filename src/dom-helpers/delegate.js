'use strict';

module.exports = function(selector, event, callback) {
	
	var target 	= event.target,
		elem 	= target.closest(selector);	
	
	if (!elem) return;

	callback(elem, event);
}