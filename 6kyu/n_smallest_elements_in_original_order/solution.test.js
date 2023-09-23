'use strict';

const kata = require('./solution');

const result1 = [1,2,3];
const result2 = [3,2,1];
const result3 = [2,1];
const result4 = [];

test('findNSmallest should find the the number of smallest units in the array but in the order they are in', () => {
  expect(kata.firstNSmallest([1,2,3,4,5], 3)).toEqual(result1);
});

test('findNSmallest should find the the number of smallest units in the array but in the order they are in', () => {
  expect(kata.firstNSmallest([5,4,3,2,1], 3)).toEqual(result2);
});

test('findNSmallest should find the the number of smallest units in the array but in the order they are in', () => {
  expect(kata.firstNSmallest([2,1,2,3,4,2], 2)).toEqual(result3);
});

test('findNSmallest should find the the number of smallest units in the array but in the order they are in', () => {
  expect(kata.firstNSmallest([7,4,7,3,2], 0)).toEqual(result4);
});