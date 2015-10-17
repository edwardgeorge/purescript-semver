"use strict";

// module Data.SemVer

var semver = require('semver');
var Data_Maybe = require('Data.Maybe');

exports.satisfies = function (a) {
  return function (b) {
    return semver.satisfies(a, b);
  };
};

exports.valid = function (s) {
  var result = semver.valid(s);
  if (result === null) {
    return Data_Maybe.Nothing.value;
  }
  return Data_Maybe.Just.create(result);
};

exports.clean = function (s) {
  var result = semver.clean(s);
  if (result === null) {
    return Data_Maybe.Nothing.value;
  }
  return Data_Maybe.Just.create(result);
};

exports._gt = function(a) {
  return function (b) {
    return semver.gt(a, b);
  };
};

exports._lt = function(a) {
  return function (b) {
    return semver.lt(a, b);
  };
};

exports.toString = function (a) { return a; };
