'use strict';

const kata = module.exports = {};

kata.loneliest = function(str) {
  let arr = [0, ...(str.length ? str.trim().match(/[a-z]+|\s+/g) : '').map(e => /\s/.test(e) ? e = e.length : e), 0];
  
  let array = [];
  for (let i = 0 ; i < arr.length ; i++) {
    arr[i].length > 1 ? array.push(...arr[i].split('')) : array.push(arr[i]);
  };
  
  let values = [];
  for (let i = 1, temp = 0 ; i < array.length - 1 ; i++) {
    if (typeof array[i] === 'string') {
      if (typeof array[i-1] === 'number') temp += array[i-1];
      if (typeof array[i+1] === 'number') temp += array[i+1];
      values.push([array[i], temp]);
      temp = 0;
    };
  };
  
  values.sort((a,b) => b[1] - a[1]);
  
  let highest = values[0][1], result = [];
  values.forEach(e => e[1] === highest ? result.push(e[0]) : '');
  
  return result;
};