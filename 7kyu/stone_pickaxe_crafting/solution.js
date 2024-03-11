'use strict';

const kata = module.exports = {};

kata.stonePick = arr => {
  if (arr.length === 0) return 0;
  
  const wood = arr.filter(item => item === 'Wood').length;
  const sticks = (wood * 4 + arr.filter(item => item === 'Sticks').length) / 2;
  const cobblestones = arr.filter(item => item === 'Cobblestone').length / 3;
  
  return Math.min(Math.floor(sticks), Math.floor(cobblestones));
};