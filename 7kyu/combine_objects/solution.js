'use strict';

const kata = module.exports = {};

kata.combine  = function(...object) {
  let result = {};

  for (let i in object) {
    for (let key in object[i]) {
      if (result[key]) {
        result[key] = result[key] + object[i][key];
      } else {
        result[key] = object[i][key];
      };
    };
  };

  return result;
};