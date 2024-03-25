'use strict';

const kata = require('./solution.js');

const input1 = "((()))";
const output1 = 4;

const input2 = "()";
const output2 = 1;

const input3 = "(())";
const output3 = 2;

const input4 = "()()";
const output4 = 2;

const input5 = "((())())";
const output5 = 6;

const input6 = "(()(()))";
const output6 = 6;

const input7 = "()(())";
const output7 = 3;

const input8 = "()((()))";
const output8 = 5;

test('Should take a string of parentheses and return the number of possible combinations of closed parentheses', () => {
  expect(kata.evalParentheses(input1)).toEqual(output1);
});

test('Should take a string of parentheses and return the number of possible combinations of closed parentheses', () => {
  expect(kata.evalParentheses(input2)).toEqual(output2);
});

test('Should take a string of parentheses and return the number of possible combinations of closed parentheses', () => {
  expect(kata.evalParentheses(input3)).toEqual(output3);
});

test('Should take a string of parentheses and return the number of possible combinations of closed parentheses', () => {
  expect(kata.evalParentheses(input4)).toEqual(output4);
});

test('Should take a string of parentheses and return the number of possible combinations of closed parentheses', () => {
  expect(kata.evalParentheses(input5)).toEqual(output5);
});

test('Should take a string of parentheses and return the number of possible combinations of closed parentheses', () => {
  expect(kata.evalParentheses(input6)).toEqual(output6);
});

test('Should take a string of parentheses and return the number of possible combinations of closed parentheses', () => {
  expect(kata.evalParentheses(input7)).toEqual(output7);
});

test('Should take a string of parentheses and return the number of possible combinations of closed parentheses', () => {
  expect(kata.evalParentheses(input8)).toEqual(output8);
});
