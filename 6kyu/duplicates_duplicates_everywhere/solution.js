'use strict';

const kata = module.exports = {};

kata.removeDuplicateIds = (obj) => {
  const keys = Object.keys(obj).reverse(), duplicates = [], hash = {};
  
  keys.forEach(key => {
    let values = Array.from(new Set(obj[key].filter(e => !duplicates.includes(e))));
    duplicates.push(...values);
    hash[key] = values;
  });
  
  return hash;
};