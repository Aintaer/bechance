require({
	shim: {
		'three': {exports: "THREE"},
		'globe': {exports: "DAT"}
	}
}, ['be', 'three', 'globe'], function(be, THREE, DAT) {
	'use strict';

	var container = document.createElement('DIV');
	document.body.appendChild(container);

	var globe = new DAT.Globe(container);
	console.log(globe);

	globe.createPoints();
	globe.animate();
	be("M55FPXPyfvChqq8GQ1TBopL8fH4cpCyd");

	be.project.search('nsfw')
	.then(function(data) {
		console.log(data);
	});
});
