'use strict';

const kata = require('./solution');

const invalid = 5423;
const valid = "Every year on September 5th, Italians celebrate Pizza Margherita Day.";
const result = "yrevE year on rebmetpeS 5th, snailatI etarbelec azziP atirehgraM Day.";

test('Function spinWords should return error', () => {
  expect(kata.spinWords(invalid)).toBe(Error);
});

test('Function spinWords should return valid result', () => {
  expect(kata.spinWords(valid)).toEqual(result);
});