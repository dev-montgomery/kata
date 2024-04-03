'use strict';

const kata = require('./solution.js');

// Test cases
const matrix1 = [
  [' ', 'x', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', '^', ' ', ' '],
  [' ', ' ', ' ', ' ']
]; // Output: true

const matrix2 = [
  [' ', ' ', ' ', ' '],
  [' ', 'v', ' ', ' '],
  [' ', ' ', ' ', 'x'],
  [' ', ' ', ' ', ' ']
]; // Output: false

const matrix3 = [
  [' ', ' ', ' ', ' '],
  ['>', ' ', ' ', 'x'],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ']
]; // Output: true

test('Should return boolean if the arrow is pointing to the x', () => {
  expect(kata.solution(matrix1)).toBe(true);
});

test('Should return boolean if the arrow is pointing to the x', () => {
  expect(kata.solution(matrix2)).toBe(false);
});

test('Should return boolean if the arrow is pointing to the x', () => {
  expect(kata.solution(matrix3)).toBe(true);
});