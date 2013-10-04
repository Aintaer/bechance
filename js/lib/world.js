define(['globe'], function(DAT) {
	function init(el) {
		this.globe = new DAT.Globe(el);
		this.globe.animate();
	}

	function add(data, opts) {
		this.globe.addData(data, opts || {
			format: 'magnitude',
			name: 'behanceprojects',
			animated: false
		});
		this.globe.createPoints();
	}
  
	function empty() {
		this.globe.clearPoints();
	}

	return { 
		empty: empty,
		init : init,
		add : add
	};
});
