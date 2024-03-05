'use strict';

const kata = require('./solution.js');

const input1 = [0, 1, 2];
const input2 = [1, 2, 3];
const input3 = [2, 6, 8, 10, 3];
const input4 = [0, 0, 3, 0, 0];
const input5 = [1, 1, 0, 1, 1];

const output1 = 1;
const output2 = 2;
const output3 = 3;
const output4 = 3;
const output5 = 0;

test('Should return the "outlier"', () => {
  expect(kata.findOutlier(input1)).toEqual(output1);
});

test('Should return the "outlier"', () => {
  expect(kata.findOutlier(input2)).toEqual(output2);
});

test('Should return the "outlier"', () => {
  expect(kata.findOutlier(input3)).toEqual(output3);
});

test('Should return the "outlier"', () => {
  expect(kata.findOutlier(input4)).toEqual(output4);
});

test('Should return the "outlier"', () => {
  expect(kata.findOutlier(input5)).toEqual(output5);
});