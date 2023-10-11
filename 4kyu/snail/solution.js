'use strict';

const kata = module.exports = {};

kata.snail = function(array) {
  let shell = [], reversedArray;
  
  while (array.length) {
    if (array.length) {
      // top values
      shell.push(...array[0]);
      array.shift();
    };
    
    if (array.length) {
      // right side values
      for(let i = 0 ; i < array.length ; i++) {
        shell.push(array[i][array[i].length - 1]);
        array[i].pop();
      };
    };
    
    if (array.length) {
      // bottom values
      reversedArray = array[array.length - 1].reverse();
      shell.push(...array[array.length - 1]);
      array.pop();
    };
    
    if (array.length) {
      // left side values;
      
      for (let i = array.length - 1 ; i  >= 0 ; i--) {
        shell.push(array[i][0]);
        array[i].shift();
      };
    };
  };
  return shell;
};