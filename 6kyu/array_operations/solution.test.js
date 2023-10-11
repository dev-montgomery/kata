'use strict';

const kata = require('./solution');

const a1 = [-4, 0, -1, 0];
const a2 = 2;
const output1 = [0, 4, 3, 4];

const b1 = [0, -1, 0, 0, -1, -1, -1, -1, 1, -1];
const b2 = 1;
const output2 = [1, 2, 1, 1, 2, 2, 2, 2, 0, 2];

const c1 = [-1];
const c2 = 10000;
const output3 = [0];

test('takes the highest value and subtracts each value in the array from it. Does it "x" number of times', () => {
  expect(kata.arrayOperations(a1,a2)).toEqual(output1);
});

test('takes the highest value and subtracts each value in the array from it. Does it "x" number of times', () => {
  expect(kata.arrayOperations(b1,b2)).toEqual(output2);
});

test('takes the highest value and subtracts each value in the array from it. Does it "x" number of times', () => {
  expect(kata.arrayOperations(c1,c2)).toEqual(output3);
});