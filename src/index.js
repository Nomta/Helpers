'use strict';

require('./polyfills');

module.exports = {
	dom: 		require('./dom-cache'),
	helpers: 	require('./dom-helpers'),
	linkHandler: 	require('./link-handler')
}
