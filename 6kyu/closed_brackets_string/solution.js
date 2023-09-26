'use strict';

const kata = module.exports = {};

kata.closedBrackets = function(s) {
  let open = 0, opened = 0;
  
  for (let i of s) {
    if (i === ')') {
      if (opened === 0) return false;
      opened--;
    } else {
      opened++;
    };

    if (i === '(') {
      open++
    } else if (open > 0) {
      open--;
    };
  };
  return open === 0;
};