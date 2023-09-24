'use strict';

const kata = module.exports = {};

kata.sentence = function(List) {
  let string = '', obj = {};

  List.forEach((e, i) => obj[Object.keys(List[i])] = Object.values(List[i])[0]);
  Object.keys(obj).sort((a,b) => a - b).forEach(e => string += ` ${obj[e]}`);
  
  return string.trim();
};