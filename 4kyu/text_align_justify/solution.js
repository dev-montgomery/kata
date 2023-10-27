'use strict';

const kata = module.exports = {};

kata.justify = function(text, width) {
  // Figure out which words are on each line;
  let line = '', lines = [], array = text.split(' ');
  
  for (let i = 0 ; i < array.length ; i++) {
    if (line === '') {
      line += array[i];
    } else if (line.length + 1 + array[i].length <= width) {
      line += ' ' + array[i];
    } else {
      lines.push(line);
      line = '';
      i--;
    };
  };
  
  if (line.length > 0) lines.push(line);
  
  // Insert spaces to justify content
  let lineCount, result = [], index;
  
  for (let i = 0 ; i < lines.length ; i++) {
    lineCount = lines[i].length;
    array = lines[i].split(' ');
    index = 0;
    
    while (lineCount < width) {
      if (index < array.length - 1) {
        array[index] += ' ';
        lineCount++;
        index++;
      } else {
        index = 0;
        if (index === array.length - 1) lineCount = width;
      };
    };
    
    result.push(array.join(' '));
  };
  
  // Fix last line by removing the added spaces ^_^
  if (/\s/.test(result[result.length - 1])) result[result.length - 1] = result[result.length - 1].replace(/\s+/g, ' ');
  
  return result.join('\n');
};