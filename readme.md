# infer-tumblr-image-size [![Build Status](https://travis-ci.org/gipphe/infer-tumblr-image-size.svg?branch=master)](https://travis-ci.org/gipphe/infer-tumblr-image-size)

> Infer the image size of a tumblr image based on its url


## Install

```
$ npm install --save infer-tumblr-image-size
```


## Usage

```js
var inferSize = require('infer-tumblr-image-size');

inferSize('http://foo.tumblr.com/bar_baz_400.png');
//=> '400'

inferSize('http://foo.tumblr.com/bar_baz_1280.png');
//=> '1280'
```


## Related

- [tp](https://github.com/gipphe/tp) - Pull images from tumblr blog


## License

MIT © [Victor Nascimento Bakke](http://giphtbase.org)
