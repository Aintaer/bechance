require({
	shim: {
    'zepto': {exports: '$'},
    'underscore': {exports: '_'},
    'backbone': {deps: ['zepto', 'underscore'], exports: 'Backbone'},
		'three': {exports: "THREE"},
		'globe': {deps: ['three'], exports: "DAT"}
	}
}, ['lib/besearch', 'lib/world', 'lib/aggregate', 'views/global-header', 'views/progress-bar'],
function(search, world, aggregate, GlobalHeader, ProgressBar) {
	'use strict';

	var searchTerm = 'nsfw',
	header, progress;

	function doSearch (term) {
		//progress.start();
    
		search(term)
		.then(aggregate)
		.then(function(data) {
			world.add(data);
		});
	}

	function init() {
		header = new GlobalHeader();
		//progress = new ProgressBar();
		header.on('submitted', function (value) { searchTerm = value; doSearch(searchTerm); });

		world.init(document.querySelector('.map'));

		doSearch(searchTerm);
	}

  window.onload = init;
});
