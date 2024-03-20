'use strict';

const kata = require('./solution.js');

const input1 = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
};

const output1 = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
};

const input2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
};

const output2 = {
  "1": [],
  "2": [],
  "3": ["A"],
};

const input3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
};

const output3 = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
};

test('it should remove duplicates in a table starting from the end and return a new table', () => {
  expect(kata.removeDuplicateIds(input1)).toEqual(output1);
});

test('it should remove duplicates in a table starting from the end and return a new table', () => {
  expect(kata.removeDuplicateIds(input2)).toEqual(output2);
});

test('it should remove duplicates in a table starting from the end and return a new table', () => {
  expect(kata.removeDuplicateIds(input3)).toEqual(output3);
});