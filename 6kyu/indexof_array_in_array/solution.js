'use strict';

const kata = module.exports = {};

kata.searchArray = function (arrayToSearch, query) {
  // validate arrayToSearch
  if (!Array.isArray(arrayToSearch) || !arrayToSearch.every(arr => Array.isArray(arr) && arr.length === 2)) {
    throw new Error('arrayToSearch input error');
  };

  // validate query
  if (!Array.isArray(query) || query.length !== 2) {
    throw new Error('query input error');
  };

  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
      return i;
    };
  };

  return -1;
};