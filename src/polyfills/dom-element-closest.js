'use strict';	

/** 
 * Polyfill for DOM Element method closest
 */
 
;(function() {
	
	if (!Element.prototype.closest) {
		Element.prototype.closest = function closest(selector) {
			if (!this) return null;
			if (this.matches(selector)) return this;
			if (!this.parentElement) return null;
			return this.parentElement.closest(selector);
		}
	}
})();