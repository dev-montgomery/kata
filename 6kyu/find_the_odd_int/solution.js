'use strict';

const kata = module.exports = {};

kata.findOdd = arr => {
  return arr.reduce((a,b) => a ^ b);
};