'use strict';

module.exports = function(elem, current, target) {
	
	elem.classList.remove(current);
	if (target) elem.classList.add(target);
}