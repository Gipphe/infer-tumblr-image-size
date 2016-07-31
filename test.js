/* globals describe:false, it:false */
'use strict';
const assert = require('better-assert');
const fn = require('./');

describe('infer-tumblr-image-size', function() {
	it('should infer correct size', function() {
		assert(fn('https://foo.bar/quux_500.png') === '500');
		assert(fn('https://foo.bar/quux_1280.jpg') === '1280');
		assert(fn('http://foo.bar/quux_foobar_400.jpg') === '400');
	});
});
