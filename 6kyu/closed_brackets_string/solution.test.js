'use strict';

const kata = require('./solution');

const input1 = '';
const input2 = '(J)(J';
const input3 = 'J()J()J()J()';
const input4 = '(JJJJJJJ)';
const input5 = ')JJJ(';

test('Should return true', () => {
  expect(kata.closedBrackets(input1)).toBe(true);
});

test('Should return true', () => {
  expect(kata.closedBrackets(input2)).toBe(true);
});

test('Should return true', () => {
  expect(kata.closedBrackets(input3)).toBe(true);
});

test('Should return true', () => {
  expect(kata.closedBrackets(input4)).toBe(true);
});

test('Should return true', () => {
  expect(kata.closedBrackets(input5)).toBe(false);
});