'use strict';

const kata = require('./solution.js');

const input1 = [2, 4, 8, 1, 1, 15];
const output1 = 16;

const input2 = [2, 2, 4, 8, 1, 1, 15];
const output2 = 16;

const input3 = [2, 4, 8, 1, 1, 15, 15, 7, 7, 7, 7, 7, 7, 7];
const output3 = 30;

const input4 = [2, 4, 8, 1, 1, 30, 30, 15, 15, 7, 7];
const output4 = 60;

test('Should combine same values and return the highest combined two values', () => {
  expect(kata.obtainMaxNumber(input1)).toEqual(output1);
});

test('Should combine same values and return the highest combined two values', () => {
  expect(kata.obtainMaxNumber(input2)).toEqual(output2);
});

test('Should combine same values and return the highest combined two values', () => {
  expect(kata.obtainMaxNumber(input3)).toEqual(output3);
});

test('Should combine same values and return the highest combined two values', () => {
  expect(kata.obtainMaxNumber(input4)).toEqual(output4);
});