'use strict';

const kata = module.exports = {};

kata.combine  = function(...obj) {
  let combined = {};

  for (let i in obj) {
    for (let u in obj[i]) {
      combined[u] ? combined[u] = combined[u] + obj[i][u] : combined[u] = obj[i][u];
    };
  };
  
  return combined;
};