'use strict';

const kata = module.exports = {};

kata.arrayDiff = function(a,b) {
  return a.filter(e => !b.includes(e));
};