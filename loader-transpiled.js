'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;

var _loaderUtils = require('loader-utils');

var MemoryFileSystem = require("memory-fs");
var fs = new MemoryFileSystem();
var spud = require('spud');

function loader(source) {
  // converts a kraken .properties file into a json export
  var options = (0, _loaderUtils.getOptions)(this);
  var ret = {};

  try {
    ret = spud.parse(source);
  } catch (e) {
    console.log(e);
  }

  // return json payload
  return `${JSON.stringify(ret)}`;
};
