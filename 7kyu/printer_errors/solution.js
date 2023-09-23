'use strict';

const kata = module.exports = {};

kata.printerError = function(s) {
if (typeof s !== 'string') return Error;

  let errors = (s.match(/[n-z]/g) || []).length;
  let sLength = s.length;
  
  return `${errors}/${sLength}`;
};