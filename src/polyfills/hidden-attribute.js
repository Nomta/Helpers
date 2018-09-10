'use strict';

/** 
 * Polyfill for hidden attribute
 */

;(function() {
	if (!('hidden' in HTMLElement.prototype)) {
		Object.defineProperty(HTMLElement.prototype, 'hidden', {
			get: function () {
				return this.hasAttribute('hidden');
			},
			set: function (value) {
				if (value) this.setAttribute('hidden', '');
				else this.removeAttribute('hidden');
				return value;
			}
		});
	}
})();