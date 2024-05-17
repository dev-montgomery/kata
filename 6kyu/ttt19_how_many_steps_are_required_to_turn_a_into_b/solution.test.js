'use strict';

const kata = require('./solution.js');

const input1 = [1, 10];
const output1 = 4;

const input2 = [1, 17];
const output2 = 5;

const input3 = [1, 64];
const output3 = 6;

const input4 = [1, 63];
const output4 = 10;

const input5 = [40, 40];
const output5 = 0;

test('Should take in two args where 0 < a <= b, and return the number of steps to get a to b by either adding 1 or multiplying by 2', () => {
  expect(kata.howManySteps(input1[0], input1[1])).toEqual(output1);
});

test('Should take in two args where 0 < a <= b, and return the number of steps to get a to b by either adding 1 or multiplying by 2', () => {
  expect(kata.howManySteps(input2[0], input2[1])).toEqual(output2);
});

test('Should take in two args where 0 < a <= b, and return the number of steps to get a to b by either adding 1 or multiplying by 2', () => {
  expect(kata.howManySteps(input3[0], input3[1])).toEqual(output3);
});

test('Should take in two args where 0 < a <= b, and return the number of steps to get a to b by either adding 1 or multiplying by 2', () => {
  expect(kata.howManySteps(input4[0], input4[1])).toEqual(output4);
});

test('Should take in two args where 0 < a <= b, and return the number of steps to get a to b by either adding 1 or multiplying by 2', () => {
  expect(kata.howManySteps(input5[0], input5[1])).toEqual(output5);
});