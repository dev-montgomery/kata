'use strict';

const kata = require('./solution');

const input1 = "24z6 1x23 y369 89a 900b";
const output1 = 1299;

const input2 = "24z6 1z23 y369 89z 900b";
const output2 = 1414;

const input3 = "10a 90x 14b 78u 45a 7b 34y";
const output3 = 60;

test('sorts "numbers" alphabetically into array and then performs a set order of calculations to return', () => {
  expect(kata.doMath(input1)).toEqual(output1);
});

test('sorts "numbers" alphabetically into array and then performs a set order of calculations to return', () => {
  expect(kata.doMath(input2)).toEqual(output2);
});

test('sorts "numbers" alphabetically into array and then performs a set order of calculations to return', () => {
  expect(kata.doMath(input3)).toEqual(output3);
});