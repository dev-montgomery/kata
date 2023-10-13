'use strict';

const kata = module.exports = {};

kata.interleave = function(...arrays) {
  let result = [], highestIndex = 0, count = 0;
  
  arrays.forEach(e => e.length > highestIndex ? highestIndex = e.length : highestIndex);
                 
  while (count < highestIndex) {
    arrays.forEach(e => e[count] || e[count] === 0 ? result.push(e[count]) : result.push(null));  
    count++;
  };
  
  return result;
};