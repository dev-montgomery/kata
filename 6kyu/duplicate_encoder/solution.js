'use strict';

const kata = module.exports = {};

kata.duplicateEncode = word => {
  const arr = word.toLowerCase().split('');
  
  let string = '';
  
  arr.forEach(letter => {
    arr.filter(e => letter === e).length > 1 ? string += ')' : string +='(';
  });
  
  return string;
};