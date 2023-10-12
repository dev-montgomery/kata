'use strict';

const kata = module.exports = {};

kata.formatDuration = function(seconds) {
  if (seconds === 0) return 'now';
  
  let duration = {'year': 31536000, 'day': 86400, 'hour': 3600, 'minute': 60, 'second': 1};
  let time = [], x;
  
  for (let i in duration) {
    x = Math.trunc(seconds/duration[i]);
    
    if (x > 0) {
      time.push(`${String(x)} ${i}`);
      seconds -= x * duration[i];
    };
  };
  
  time = time.map(e => +e.split(' ')[0] > 1 ? e += 's' : e);
  
  return time.reduce((prev, curr) => 
      time.indexOf(curr) !== time.length - 1 ? prev = `${prev}, ${curr}` : prev = `${prev} and ${curr}`);
};