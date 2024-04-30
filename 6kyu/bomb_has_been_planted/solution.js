'use strict';

const kata = module.exports = {};

kata.bombHasBeenPlanted = (map, time) => {
  let ct = null, b = null, k = null;
  
  map.forEach((arr, y) => {
    if (arr.includes('CT')) ct = [arr.indexOf('CT'), y];
    if (arr.includes('B')) b = [arr.indexOf('B'), y];
    if (arr.includes('K')) k = [arr.indexOf('K'), y];
  });
  
  const ctToB = Math.max(Math.abs(ct[0] - b[0]), Math.abs(ct[1] - b[1]));
  
  if (!k) {
    return ctToB + 10 <= time ? true : false;
  };
  
  if (ctToB + 10 <= time) return true;
  
  const ctToK = Math.max(Math.abs(ct[0] - k[0]), Math.abs(ct[1] - k[1]));
  const kToB = Math.max(Math.abs(k[0] - b[0]), Math.abs(k[1] - b[1]));
  
  return ctToK + 5 + kToB <= time ? true : false;
};