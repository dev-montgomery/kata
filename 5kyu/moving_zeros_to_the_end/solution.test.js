'use strict';

const kata = require('./solution');

const input = [1,2,0,1,0,1,0,3,0,1];
const output = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];

test('moves zeroes to the end', () => {
  expect(kata.moveZeros(input)).toEqual(output);
});