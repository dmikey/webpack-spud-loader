'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;

var _loaderUtils = require('loader-utils');

function loader(source) {
  // converts a kraken .properties file into a json export
  var options = (0, _loaderUtils.getOptions)(this);

  // restructure props file to be valid json
  source = '{"' + source;
  source = source.split('\n');
  source = source.join('","');
  source = source.replace(/=/g, '":"');
  source = source + '"}';
  source = source.replace(',""', '');

  // parse file
  source = JSON.parse(source);

  // blow out compound keys, i.e  foo.bar=baz {foo:{bar:'baz'}}

  var _loop = function _loop(key) {
    if (key.indexOf('.') > -1) {
      key.split('.').reduce(function (last, namespace, idx, list) {
        if (idx == list.length - 1) {
          last[namespace] = source[key];
        } else {
          last[namespace] = last[namespace] ? last[namespace] : {};
        }
        return last[namespace];
      }, source);
      delete source[key];
    }
  };

  for (var key in source) {
    _loop(key);
  }

  // return json payload
  return `${JSON.stringify(source)}`;
};
