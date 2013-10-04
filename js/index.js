require({
	shim: {
    'zepto': {exports: '$'},
    'underscore': {exports: '_'},
    'backbone': {deps: ['zepto', 'underscore'], exports: 'Backbone'},
		'three': {exports: "THREE"},
		'globe': {deps: ['three'], exports: "DAT"}
	}
}, ['lib/besearch', 'lib/world', 'lib/aggregate', 'views/global-header', 'views/progress-bar', 'views/stars-view'],
function(search, world, aggregate, GlobalHeader, ProgressBar, StarsView) {
	'use strict';

	var searchTerm = 'nsfw',
	header, progress, stars;

	function doSearch (term) {
    progress.start();
    
		search(term)
		.then(aggregate)
		.then(function(data) {
      progress.finish();
			world.add(data);
		});
	}

	function init() {
		header = new GlobalHeader();
    progress = new ProgressBar();
    stars = new StarsView().render();
		header.on('submitted', function (value) { searchTerm = value; doSearch(searchTerm); });

		world.init(document.querySelector('.map'));

		doSearch(searchTerm);
	}

  window.onload = init;
});
