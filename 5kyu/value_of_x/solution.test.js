'use strict';

const kata = require('./solution.js');

const input1 = 'x + 1 = 9 - 2';
const output1 = 6;

const input2 = 'x - 2 + 3 = 2';
const output2 = 1;

const input3 = 'x = + 2 - 5 + 9';
const output3 = 6;

const input4 = '- 10 = x';
const output4 = -10;

const input5 = '- x = - 1';
const output5 = 1;

const input6 = 'x - 0 + 0 = 0';
const output6 = 0;

test('Should parse a... stringified equation into a real equation and produce the value of x', () => {
  expect(kata.valueOfX(input1)).toEqual(output1);
});

test('Should parse a... stringified equation into a real equation and produce the value of x', () => {
  expect(kata.valueOfX(input2)).toEqual(output2);
});

test('Should parse a... stringified equation into a real equation and produce the value of x', () => {
  expect(kata.valueOfX(input3)).toEqual(output3);
});

test('Should parse a... stringified equation into a real equation and produce the value of x', () => {
  expect(kata.valueOfX(input4)).toEqual(output4);
});

test('Should parse a... stringified equation into a real equation and produce the value of x', () => {
  expect(kata.valueOfX(input5)).toEqual(output5);
});

test('Should parse a... stringified equation into a real equation and produce the value of x', () => {
  expect(kata.valueOfX(input6)).toEqual(output6);
});