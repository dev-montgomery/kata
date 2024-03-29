'use strict';

const kata = module.exports = {};

kata.each = (n, xs) => {  
  if (n === 0 || Math.abs(n) > xs.length) return [];
  if (n > 0) return xs.filter((e,i) => (i + 1) % n === 0);
  if (n < 0) return xs.reverse().filter((e,i) => (i + 1) % Math.abs(n) === 0);
};