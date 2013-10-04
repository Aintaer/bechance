define(['be', 'nbd/util/when'], function(be, when) {
	be("M55FPXPyfvChqq8GQ1TBopL8fH4cpCyd");

	function mkArray(num) {
		var arr = [], i;
		for (i=1; i<=num; ++i) {
			arr.push(i);
		}
		return arr;
	}

	return function(term) {

		return when.apply(null, mkArray(50).map(function(page) {
			return be.project.search({q: term, page: page});
		}))
		.then(function(results) {
			var locMap = {};
			results.forEach(function(result) {
			result.projects.forEach(function(project) {
				project.owners.forEach(function(owner) {
					var loc = [owner.city, owner.state, owner.country]
					.filter(function(s) { return !!s; })
					.join(', ');

					locMap[loc] = locMap[loc] || 0;
					locMap[loc]++;
				});
			});
			});
			return locMap;
		});
	};
});
