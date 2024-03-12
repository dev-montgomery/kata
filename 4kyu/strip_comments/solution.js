'use strict';

const kata = module.exports = {};

kata.solution = (text, markers) => {
  let array = text.split('\n');
  
  for (let i = 0 ; i < array.length ; i++) {
    let line = array[i];
    let indexes = [];
    
    markers.forEach(marker => {
      if (line.indexOf(marker) > -1) {
        indexes.push(line.indexOf(marker));
      };
    });
    
    array[i] = line.substring(0, Math.min(...indexes)).trimEnd();
  };

  return array.join('\n');
};