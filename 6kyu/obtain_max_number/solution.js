'use strict';

const kata = module.exports = {};

kata.obtainMaxNumber = (arr) => {
  const merge = array => {
    const size = array.length
    
    for (let i = 0 ; i < array.length ; i++) {
      if (i !== array.lastIndexOf(array[i])){
        array.splice(array.lastIndexOf(array[i]), 1);
        array[i] = array[i] * 2;
      };
    };
    return array.length === size ? array : merge(array);
  };
  
  return Math.max(...merge(arr));
};