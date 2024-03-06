'use strict';

const kata = require('./solution.js');

const input = ["tsar", "rat", "tar", "star", "tars", "cheese"];

const output = [
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
];

test('Should return a sorted list of anagrams from the input array', () => {
  expect(kata.groupAnagrams(input)).toEqual(output);
});