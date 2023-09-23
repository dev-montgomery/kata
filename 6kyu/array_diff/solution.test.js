'use strict';

const kata =require('./solution');

const arr1 = [3,7,4,3,8,7,9,2];
const arr2 = [8,21,7,3,7,9,1];
const arr3 = [2,4,56,7,8,9];

const result1 = [4, 2];
const result2 = [21, 3, 1];
const result3 = [3, 3];

test('Removes duplicate values in the first array using values from a second array', () => {
  expect(kata.arrayDiff(arr1, arr2)).toEqual(result1);
});

test('Removes duplicate values in the first array using values from a second array', () => {
  expect(kata.arrayDiff(arr2, arr3)).toEqual(result2);
});

test('Removes duplicate values in the first array using values from a second array', () => {
  expect(kata.arrayDiff(arr1, arr3)).toEqual(result3);
});