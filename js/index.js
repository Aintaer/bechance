/*global Typekit */
require({
	shim: {
		'three': {exports: "THREE"}
	}
}, ['be', 'three'], function(be, THREE) {
	'use strict';

	var container = document.createElement('DIV');
	document.body.appendChild(container);

	container.textContent = "NO JQUERY EVAR";

	be("M55FPXPyfvChqq8GQ1TBopL8fH4cpCyd");

	be.project.search('nsfw')
	.then(function(data) {
		container.textContent =
		data.projects.map(function(project) {
			return project.name;
		}).join(', ');
	});
});
