'use strict';

const kata = module.exports = {};

kata.histogram = results => {
  const array = [];
  
  results.forEach((num, index) => {
    const string = num > 0 ? `${index + 1}|${'#'.repeat(num)} ${num}` : `${index + 1}|`;
    array.push(string);
  });
  
  const answer = array.reverse().join('\n');
  return answer;
};