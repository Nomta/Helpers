'use strict';

module.exports = function(nodeName, attrs, content) {
	
	var elem = document.createElement(nodeName);
	
	if (typeof attrs === 'string') 
		elem.className = attrs;
	
	else if (attrs) 
		for (var key in attrs) 
			if (attrs.hasOwnProperty(key)) {
				if (key === 'className') 
					elem.className = attrs[key];
				else 
					elem.setAttribute(key, attrs[key]);
			}
	
	if (content) 
		elem.innerHTML = content;
	
	return elem;
}