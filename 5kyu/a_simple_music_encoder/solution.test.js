'use strict';

const kata = require('./solution.js');

const input1 = [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
const output1 = "1,3-5,7-11,14,15,17-20";

const input2 = [0, 2, 4, 5, 7, 8, 9];
const output2 = "0-4/2,5,7-9";

const input3 = [0, 2, 4, 5, 7, 6, 5];
const output3 = "0-4/2,5,7-5";

const input4 = [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5];
const output4 = "0-4/2,5,7-5,5*4";

test('Should "compress" input based on consecutive values', () => {
  expect(kata.compress(input1)).toEqual(output1);
});

test('Should "compress" input based on consecutive values', () => {
  expect(kata.compress(input2)).toEqual(output2);
});

test('Should "compress" input based on consecutive values', () => {
  expect(kata.compress(input3)).toEqual(output3);
});

test('Should "compress" input based on consecutive values', () => {
  expect(kata.compress(input4)).toEqual(output4);
});