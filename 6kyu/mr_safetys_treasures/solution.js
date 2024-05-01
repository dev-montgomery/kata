'use strict';

const kata = module.exports = {};

kata.unlock = str => {
  return str
    .toLowerCase()
    .replace(/[abc]/g, 2)
    .replace(/[def]/g, 3)
    .replace(/[ghi]/g, 4)
    .replace(/[jkl]/g, 5)
    .replace(/[mno]/g, 6)
    .replace(/[pqrs]/g, 7)
    .replace(/[tuv]/g, 8)
    .replace(/[wxyz]/g, 9);
};