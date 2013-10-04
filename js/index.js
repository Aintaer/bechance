/*global Typekit */
require({
	shim: {
		'three': {exports: "THREE"}
	}
}, ['jquery'], function($) {
	'use strict';

	var $html = $('html'),
	$doc = $(document.body);

	$doc.append("<div>OH GOD</div>");
});
