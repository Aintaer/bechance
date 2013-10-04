define(['globe'], function(DAT) {
	function init(el) {
		this.globe = new DAT.Globe(el);
		this.globe.animate();
	}

	function add(data, opts) {
		this.globe.addData(data, opts || {
			format: 'magnitude',
			name: 'behanceprojects'
		});
		this.globe.createPoints();
	}

	return { 
		init : init,
		add : add
	};
});
