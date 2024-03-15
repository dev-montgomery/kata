'use strict';

const kata = require('./solution.js');

const input1 = [3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0];
const output1 = [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0];

const input2 = [3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0];
const output2 = [1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0];

const input3 = [2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0];
const output3 = [2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0];

test('Should accept an array of numerical values, ascend the values between 0s, and then position them in ascending order based on the section totals', () => {
  expect(kata.sortSequence(input1)).toEqual(output1);
});

test('Should accept an array of numerical values, ascend the values between 0s, and then position them in ascending order based on the section totals', () => {
  expect(kata.sortSequence(input2)).toEqual(output2);
});

test('Should accept an array of numerical values, ascend the values between 0s, and then position them in ascending order based on the section totals', () => {
  expect(kata.sortSequence(input3)).toEqual(output3);
});