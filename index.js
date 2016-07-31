'use strict';
module.exports = function(url) {
	return url.split('_').pop().split('.').shift();
};
