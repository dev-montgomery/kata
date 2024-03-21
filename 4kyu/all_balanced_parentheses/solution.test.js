'use strict';

const kata = require('./solution.js');

const input1 = 0;
const output1 = [""];

const input2 = 1;
const output2 = ["()"];

const input3 = 2;
const output3 = ["(())","()()"];

const input4 = 3;
const output4 = ["((()))","(()())","(())()","()(())","()()()"];

test('Should return an array of total "balanced" parentheses based on a given number of parentheses', () => {
  expect(kata.balancedParens(input1)).toEqual(output1);
});

test('Should return an array of total "balanced" parentheses based on a given number of parentheses', () => {
  expect(kata.balancedParens(input2)).toEqual(output2);
});

test('Should return an array of total "balanced" parentheses based on a given number of parentheses', () => {
  expect(kata.balancedParens(input3)).toEqual(output3);
});

test('Should return an array of total "balanced" parentheses based on a given number of parentheses', () => {
  expect(kata.balancedParens(input4)).toEqual(output4);
});