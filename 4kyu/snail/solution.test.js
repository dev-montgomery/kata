'use strict';

const kata = require('./solution.js');

const input1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const output1 = [1, 2, 3, 6, 9, 8, 7, 4, 5];

const input2 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];
const output2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test('Should return an array of elements arranged from outermost elements to the middle element, traveling clockwise', () => {
  expect(kata.snail(input1)).toEqual(output1);
});

test('Should return an array of elements arranged from outermost elements to the middle element, traveling clockwise', () => {
  expect(kata.snail(input2)).toEqual(output2);
});