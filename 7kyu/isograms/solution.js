' use strict';

const kata = module.exports = {};

kata.isIsogram = str => {
  return str.length === Array.from(new Set(str.toLowerCase())).length;
};