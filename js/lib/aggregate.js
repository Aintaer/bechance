define(['nbd/trait/promise', 'nbd/util/when'], function(Promise, when) {
	var map;

	function getMax(obj) {
		var curMax = 0;
		for (var k in obj) if (obj.hasOwnProperty(k)) {
			curMax = Math.max(curMax, obj[k]);
		}
		return curMax;
	}

	function mapRequest(requests) {
		var data = [], i=0,
		promise = new Promise();

		function request(req) {
			console.log(req);
			map.geocode({address: req.location}, function(result) {
				if (!result) {
					promise.resolve(data);
					return;
				}

				var location = result[0].geometry.location;
				data.push(location.lat(), location.lng(), req.value);

				if (++i < requests.length) {
					setTimeout(function() {
					request(requests[i]);
					}, 500);
				}
				else {
					promise.resolve(data);
				}
			});
		}
		request(requests[i]);

		return promise;
	}

	function transform(obj) {
		map = map || new google.maps.Geocoder(); 
		var max = getMax(obj),
		locations = Object.keys(obj).map(function(location) {
			return {location: location, value: obj[location]/max};
		});

		return mapRequest(locations);
	}

	return transform;
});
