'use strict';

const kata = module.exports = {};

kata.findOutlier = function(integers) {
  const array = integers.map(e => e % 2 === 0 ? 'even' : 'odd');
  const index = array.filter(e => e === 'even').length > 1 ? array.indexOf('odd') : array.indexOf('even');

  return integers[index];
};