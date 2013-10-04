define(['globe'], function(DAT) {
	function init(el) {
		this.globe = new DAT.Globe(el);
		this.globe.animate();
	}

	function add(data, opts) {
		this.globe.addData(data, opts || {
			format: 'magnitude',
			name: 'behanceprojects',
      animated: true
		});
		this.globe.createPoints();
	}
  
  function empty() {
    this.globe.renderer.clear()
  }

	return { 
    empty: empty,
		init : init,
		add : add
	};
});
