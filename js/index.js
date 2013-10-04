/*global Typekit */
require({
	shim: {
		'three': {exports: "THREE"}
	}
}, ['three'], function(THREE) {
	'use strict';

	var container = document.createElement('DIV');
	document.body.appendChild(container);

	container.textContent = "NO JQUERY EVAR";
});
