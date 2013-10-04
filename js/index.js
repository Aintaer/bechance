require({
	shim: {
		'three': {exports: "THREE"},
		'globe': {exports: "DAT"}
	}
}, ['be', 'three', 'globe'], function(be, THREE, DAT) {
	'use strict';

	var globe = new DAT.Globe(document.querySelector('.map'));
	console.log(globe);

	globe.addData([40.67, 73.94, 0.2], {
		format: 'magnitude',
		name: 'test',
		animated: false
	});
	globe.createPoints();
	globe.animate();
	be("M55FPXPyfvChqq8GQ1TBopL8fH4cpCyd");

	be.project.search('nsfw')
	.then(function(data) {
		console.log(data);
	});
});
