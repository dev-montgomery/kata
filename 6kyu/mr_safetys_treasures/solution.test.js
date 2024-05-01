'use strict';

const kata = require('./solution.js');

const input1 = "Nokia";
const output1 = "66542";

const input2 = "Valut";
const output2 = "82588";

const input3 = "toilet";
const output3 = "864538";

test('Should return the digits associated with the Nokia\'s keys', () => {
  expect(kata.unlock(input1)).toEqual(output1);
});

test('Should return the digits associated with the Nokia\'s keys', () => {
  expect(kata.unlock(input2)).toEqual(output2);
});

test('Should return the digits associated with the Nokia\'s keys', () => {
  expect(kata.unlock(input3)).toEqual(output3);
});