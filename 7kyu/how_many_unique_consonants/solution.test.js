'use strict';

const kata = require('./solution.js');

const input1 = "add";
const output1 = 1;

const input2 = "Dad";
const output2 = 1;

const input3 = "aeiou";
const output3 = 0;

const input4 = "sillystring";
const output4 = 7;

const input5 = "abcdefghijklmnopqrstuvwxyz";
const output5 = 21;

const input6 = "Count my unique consonants!!";
const output6 = 7;

test('Should return the number of unique consonants from a string', () => {
  expect(kata.countConsonants(input1)).toEqual(output1);
});

test('Should return the number of unique consonants from a string', () => {
  expect(kata.countConsonants(input2)).toEqual(output2);
});

test('Should return the number of unique consonants from a string', () => {
  expect(kata.countConsonants(input3)).toEqual(output3);
});

test('Should return the number of unique consonants from a string', () => {
  expect(kata.countConsonants(input4)).toEqual(output4);
});

test('Should return the number of unique consonants from a string', () => {
  expect(kata.countConsonants(input5)).toEqual(output5);
});

test('Should return the number of unique consonants from a string', () => {
  expect(kata.countConsonants(input6)).toEqual(output6);
});