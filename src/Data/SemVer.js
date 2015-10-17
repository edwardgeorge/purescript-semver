"use strict";

// module Data.SemVer

var semver = require('semver');
var Prelude = require('Prelude');
var Data_Maybe = require('Data.Maybe');

exports.parseVersion = function (s) {
  var result = semver.parse(s);
  if (result === null) {
    return Data_Maybe.Nothing.value;
  }
  return Data_Maybe.Just.create(result);
};

exports.parseVersionLoose = function (s) {
  var result = semver.parse(s, true);
  if (result === null) {
    return Data_Maybe.Nothing.value;
  }
  return Data_Maybe.Just.create(result);
};

exports.versionToString = function (v) {
  return v.version;
};

exports.major = function (v) {
  return v.major;
};

exports.minor = function (v) {
  return v.minor;
};

exports.patch = function (v) {
  return v.patch;
};

exports.parseRange = function (s) {
  try {
    var result = new semver.Range(s);
    return Data_Maybe.Just.create(result);
  } catch (err) {
    return Data_Maybe.Nothing.value;
  }
};

exports.parseRangeLoose = function (s) {
  try {
    var result = new semver.Range(s, true);
    return Data_Maybe.Just.create(result);
  } catch (err) {
    return Data_Maybe.Nothing.value;
  }
};

exports.rangeToString = function (r) {
  return r.range || '*';
};

exports.satisfies = function (v) {
  return function (r) {
    return r.test(v);
  };
};

exports.compareVersions = function (a) {
  return function (b) {
    var result = a.compare(b);
    if (result > 0) {
      return Prelude.GT.value;
    } else if (result < 0) {
      return Prelude.LT.value;
    } else {
      return Prelude.EQ.value;
    }
  };
};
