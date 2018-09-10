'use strict';	

/** 
 * Polyfill for DOM Element method matches
 */
 
;(function() {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector
		|| Element.prototype.msMatchesSelector
		|| Element.prototype.webkitMatchesSelector
		|| Element.prototype.mozMatchesSelector
		|| Element.prototype.oMatchesSelector;
	}
})();