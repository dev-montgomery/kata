'use strict';

const kata = require('./solution');

const input1 = 'hello';
const input2 = 'aaahello';
const output1 = 'a';

const input3 = 'abcde';
const input4 = '2db2a2ec';

const output2 = '2';

test('should compare two strings and return the added character', () => {
  expect(kata.addedChar(input1, input2)).toEqual(output1);
});

test('should compare two strings and return the added character', () => {
  expect(kata.addedChar(input3, input4)).toEqual(output2);
});