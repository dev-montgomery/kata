'use strict';

const kata = require('./solution.js');

const array = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];

const query1 = [9,20];
const query2 = [1,12];
const query3 = [7,2];

const output1 = 2;
const output2 = -1;
const output3 = 1;

test('Should return the position of an array with two values from an array of multiple pairs of values', () => {
  expect(kata.searchArray(array, query1)).toEqual(output1);
});

test('Should return the position of an array with two values from an array of multiple pairs of values', () => {
  expect(kata.searchArray(array, query2)).toEqual(output2);
});

test('Should return the position of an array with two values from an array of multiple pairs of values', () => {
  expect(kata.searchArray(array, query3)).toEqual(output3);
});