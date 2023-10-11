'use strict';

const kata = module.exports = {};

kata.arrayOperations = function(a, k) {
  let highest;
  
  while (k > 0) {
    highest = Math.max(...a);
    a = a.map(e => e = highest - e);
    k--;
  };
  return a;
};