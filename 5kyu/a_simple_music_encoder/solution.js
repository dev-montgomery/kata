'use strict';

const kata = module.exports = {};

kata.compress = music => {
  let first, last, interval;

  for (let i = 0 ; i < music.length ; i++) {
    // set the interval
    if (i + 1 < music.length) {
      interval = music[i] - music[i + 1];
      if (interval < 0) interval = interval * -1;
    };
    
    // ascending values
    if (i + 2 < music.length) {
      if (music[i] + interval === music[i + 1]) {
        first = i;
        while (music[i] + interval === music[i + 1]) i++;
        last = i;
        if (last - first > 1 && interval === 1) music.splice(first, last - first + 1, `${music[first]}-${music[last]}`);
        if (last - first > 1 && interval > 1) music.splice(first, last - first + 1, `${music[first]}-${music[last]}/${interval}`);
        i = first;
      };
    };
    
    // descending values
    if (i + 2 < music.length) {
      if (music[i] - interval === music[i + 1]) {
        first = i;
        while (music[i] - interval === music[i + 1]) i++;
        last = i;
        if (last - first > 1 && interval === 1) music.splice(first, last - first + 1, `${music[first]}-${music[last]}`);
        if (last - first > 1 && interval > 1) music.splice(first, last - first + 1, `${music[first]}-${music[last]}/${interval}`);
        i = first;
      };
    };
    
    // equal values
    if (i + 1 < music.length) {
      if (music[i] === music[i + 1]) {
        first = i;
        while (music[i] === music[i + 1]) i++;
        last = i;
        music.splice(first, last - first + 1, `${music[first]}*${last - first + 1}`);
        i = first;
      };
    };
  };
  return music.join(',');
};