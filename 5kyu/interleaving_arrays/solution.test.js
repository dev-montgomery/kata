'use strict';

const kata = require('./solution');

test('should interleave arrays', () => {
  expect(kata.interleave([1, 2, 3], ["c", "d", "e"])).toEqual([1, "c", 2, "d", 3, "e"]);
});

test('should interleave arrays', () => {
  expect(kata.interleave([1, 2, 3], [4, 5])).toEqual([1, 4, 2, 5, 3, null]);
});

test('should interleave arrays', () => {
  expect(kata.interleave([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([1, 4, 7, 2, 5, 8, 3, 6, 9]);
});

test('should interleave arrays', () => {
  expect(kata.interleave([])).toEqual([]);
});