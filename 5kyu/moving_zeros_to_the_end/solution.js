'use strict';

const kata = module.exports = {};

kata.moveZeros = function (arr) {
  let filtered = arr.filter(e => e !== 0);
  let zeros = arr.filter(e => e === 0);
  
  return filtered.concat(zeros);
};