'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;

var _loaderUtils = require('loader-utils');

var _spud = require('spud');

var _spud2 = _interopRequireDefault(_spud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loader(source) {
  // converts a kraken .properties file into a json export
  var options = (0, _loaderUtils.getOptions)(this);
  var ret = {};

  try {
    ret = _spud2.default.parse(source);
  } catch (e) {
    console.log(e);
  }

  // return json payload
  return `${JSON.stringify(ret)}`;
};
