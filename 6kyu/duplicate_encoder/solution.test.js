'use strict';

const kata = require('./solution.js');

const input1 = "din";
const output1 = "(((";
const input2 = "recede";
const output2 = "()()()";
const input3 = "Success";
const output3 = ")())())";
const input4 = "(( @";
const output4 = "))((";

test('Should return a string where duplicate values return a ")" and unique values return a "("', () => {
  expect(kata.duplicateEncode(input1)).toEqual(output1);
});

test('Should return a string where duplicate values return a ")" and unique values return a "("', () => {
  expect(kata.duplicateEncode(input2)).toEqual(output2);
});

test('Should return a string where duplicate values return a ")" and unique values return a "("', () => {
  expect(kata.duplicateEncode(input3)).toEqual(output3);
});

test('Should return a string where duplicate values return a ")" and unique values return a "("', () => {
  expect(kata.duplicateEncode(input4)).toEqual(output4);
});