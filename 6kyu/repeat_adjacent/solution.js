'use strict';

const kata = module.exports = {};

kata.repeatAdjacent = s => {
  const regex = /(.)\1*/g;
  const repeating = s.match(regex);

  if (!repeating) return 0;

  let string = '', count = 0;
  repeating.forEach(e => e.length > 1 ? string += e : string += ' ');

  let array = string.trim().split(/ +/g);
  array.forEach(group => {
    let a = group.split('');
    if (!a.every(e => e === a[0])) count++;
  });

  return count;
};