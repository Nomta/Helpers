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