'use strict';

const kata = module.exports = {};

kata.spinWords = function(string) {
  if (typeof string !== "string") return Error;
  return string.split(' ').map(e => e.length > 4 ? e = e.split('').reverse().join('') : e).join(' ');
};