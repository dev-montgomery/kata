'use strict';

const kata = module.exports = {};

kata.convertHashToArray = hash => {
  const array = [];

  for (const key in hash) {
    array.push([key, hash[key]]);
  };

  return array.sort();
};