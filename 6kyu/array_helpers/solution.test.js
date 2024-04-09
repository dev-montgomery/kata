'use strict';

const kata = require('./solution.js');

const numbers = [1, 2, 3, 4, 5];

test("Should test Array prototypes", () => {
  expect(numbers.square()).toEqual([1, 4, 9, 16, 25]);
  expect(numbers.cube()).toEqual([1, 8, 27, 64, 125]);
  expect(numbers.sum()).toEqual(15);
  expect(numbers.average()).toEqual(3);
  expect(numbers.even()).toEqual([2, 4]);
  expect(numbers.odd()).toEqual([1, 3, 5]);
});