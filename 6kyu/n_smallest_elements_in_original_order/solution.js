'use strict';

const kata = module.exports = {};

kata.firstNSmallest = function(array, n) {
  const findSmallest = array => {
    let min = Math.min(...array);
    let max = Math.max(...array);
    let position = array.indexOf(min);
    array.splice(position, 1, max + 1);
    return [position, min, array];
  };

  let order = [], findSmallestAnswer;

  while (order.length < n) {
    findSmallestAnswer = findSmallest(array);
    order.push([findSmallestAnswer[0], findSmallestAnswer[1]]);
    array = findSmallestAnswer[2];
  };

  let result = [];

  order.sort((a,b) => a[0] - b[0]);
  order.forEach(e => result.push(e[1]));

  return result;
};