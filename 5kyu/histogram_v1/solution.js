'use strict';

const kata = module.exports = {};

kata.histogram = function(results) {
  const array = [], offset = 3, max = Math.max(...results) + offset;
  
  results.forEach((num, index) => {
    const string = num > 0 ? `${index + 1}-${'#'.repeat(num)}a` : `${index + 1}-`;
    array.push(string);
  });
  
  let histogramStrings = [];

  for (let i = 0 ; i < max ; i++) {
    let string = ''
    for (let u = 0 ; u < array.length ; u++) {
      string += array[u][i] ? array[u][i] : ` `;
    };
    histogramStrings.push(string);
  };
  
  // add spaces
  histogramStrings = histogramStrings.map(e => e.split('').join(' '));  
  
  // fix horizontal line
  histogramStrings[1] = `-----------`;
  
  // replace temp values with results
  histogramStrings = histogramStrings.map((e,i) => e.includes('a') ? e.replace(/a/g, i - 2) : e);
  
  // trim the end spaces
  histogramStrings = histogramStrings.map(e => e.trimEnd() + '\n');
  
  // remove empty lines
  histogramStrings = histogramStrings.filter(e => e !== '\n');
  
  // Missy Elliott
  const answer = histogramStrings.reverse().join('');
  
  return answer;
};