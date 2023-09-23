'use strict';

const kata = require('./solution');

const invalid = 462;
const valid = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
const result = '3/56';

test('printError should return an Error with invalid input', () => {
  expect(kata.printerError(invalid)).toBe(Error);
});

test('printError should return valid result', () => {
  expect(kata.printerError(valid)).toEqual(result);
});