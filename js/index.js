require({
	shim: {
    'zepto': {exports: '$'},
    'underscore': {exports: '_'},
    'backbone': {deps: ['zepto', 'underscore'], exports: 'Backbone'},
		'three': {exports: "THREE"},
		'globe': {exports: "DAT"}
	}
}, ['be', 'three', 'globe', 'views/global-header'],
  function(be, THREE, DAT, GlobalHeader) {
  	'use strict';
    
    var searchTerm = 'nsfw';
    var header = new GlobalHeader();
    header.on('submitted', function (value) { searchTerm = value; doSearch(searchTerm); });

    var globe = new DAT.Globe(document.querySelector('.map'));
  	globe.addData([40.67, 73.94, 0.2], {
  		format: 'magnitude',
  		name: 'test',
  		animated: false
  	});

  	globe.createPoints();
  	globe.animate();
  	be("M55FPXPyfvChqq8GQ1TBopL8fH4cpCyd");
    
    var doSearch = function (term) {
    	be.project.search(term)
    	.then(function(data) {
    		console.log('results', data);
    	});
    }
    
    doSearch(searchTerm);
});
