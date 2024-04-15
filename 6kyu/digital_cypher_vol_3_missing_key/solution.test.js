'use strict';

const kata = require('./solution.js');

const input1 = ["scout", [ 20, 12, 18, 30, 21]];
const output1 = 1939;

const input2 = ["masterpiece", [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]];
const output2 = 1939;

const input3 = ["nomoretears", [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20]];
const output3 = 12;

test('Should return the cypher key', () => {
  expect(kata.findTheKey(input1[0], input1[1])).toEqual(output1);
});

test('Should return the cypher key', () => {
  expect(kata.findTheKey(input2[0], input2[1])).toEqual(output2);
});

test('Should return the cypher key', () => {
  expect(kata.findTheKey(input3[0], input3[1])).toEqual(output3);
});