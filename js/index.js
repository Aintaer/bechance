require({
	shim: {
    'zepto': {exports: '$'},
    'underscore': {exports: '_'},
    'backbone': {deps: ['zepto', 'underscore'], exports: 'Backbone'},
		'three': {exports: "THREE"},
		'globe': {deps: ['three'], exports: "DAT"}
	}
}, ['be', 'lib/world', 'views/global-header', 'views/progress-bar'],
function(be, world, GlobalHeader, ProgressBar) {
	'use strict';

	var searchTerm = 'nsfw';
	var header = new GlobalHeader();
	header.on('submitted', function (value) { searchTerm = value; doSearch(searchTerm); });
  
  var progress = new ProgressBar()

	be("M55FPXPyfvChqq8GQ1TBopL8fH4cpCyd");

	function doSearch (term) {
    progress.start()
    
		be.project.search(term)
		.then(function(data) {
      progress.finish()
			console.log('results', data);
		});
	}

	function init() {
		world.init(document.querySelector('.map'));

		doSearch(searchTerm);
		var map = new google.maps.Geocoder(); 
		map.geocode({
			address: "New York, New York, US"
		}, function(results, status) {
			var location = results[0].geometry.location;
			world.add([location.lat(), location.lng(), 0.2]);
		});
	}

	document.addEventListener('DOMContentLoaded', init);
});
