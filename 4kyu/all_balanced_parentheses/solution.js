'use strict';

const kata = module.exports = {};

kata.balancedParens = (n) => {
  const parens = [];

  const createParens = (left, right, current) => {
    if (left === 0 && right === 0) {
      parens.push(current);
      return;
    };

    if (left > 0) {
      createParens(left - 1, right, current + '(');
    };

    if (right > left) {
      createParens(left, right - 1, current + ')');
    };
  };

  createParens(n, n, '');
  return parens;
};