'use strict';

const kata = module.exports = {};

kata.addedChar = function(s1, s2){
  let a1 = [...s1].sort();
  let a2 = [...s2].sort();

  return a2.filter((e,i) => a1[i] !== e)[0];
};