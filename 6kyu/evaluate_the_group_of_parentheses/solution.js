'use strict';

const kata = module.exports = {};

kata.evalParentheses = parens => {
  const stack = [];
  let score = 0;

  parens.split('').forEach(e => {
    if (e === '(') {
      stack.push(score);
      score = 0;
    } else {
      const prevScore = stack.pop();
      score = prevScore + Math.max(2 * score, 1);
    };
  });

  return score;
};