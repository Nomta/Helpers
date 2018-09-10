'use strict';

module.exports = {
	createElement: 			require('./create-element'),
	delegate: 				require('./delegate'),
	getNodeFromSelector: 	require('./get-nodes').getNode,
	getNodesFromSelector:	require('./get-nodes').getNodes,
	toggleClass: 			require('./toggle-class')
}