'use strict';

const kata = require('./solution.js');

const input1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
const output1 = 5;
const input2 = [1,1,2,-2,5,2,4,4,-1,-2,5];
const output2 = -1;
const input3 = [20,1,1,2,2,3,3,5,5,4,20,4,5]; 
const output3 = 5;
const input4 = [10];
const output4 = 10;
const input5 = [1,1,1,1,1,1,10,1,1,1,1]; 
const output5 = 10;
const input6 = [5,4,3,2,1,5,4,3,2,10,10];
const output6 = 1;

test('Should return the integer that appears an odd number of times', () => {
  expect(kata.findOdd(input1)).toEqual(output1);
});

test('Should return the integer that appears an odd number of times', () => {
  expect(kata.findOdd(input2)).toEqual(output2);
});

test('Should return the integer that appears an odd number of times', () => {
  expect(kata.findOdd(input3)).toEqual(output3);
});

test('Should return the integer that appears an odd number of times', () => {
  expect(kata.findOdd(input4)).toEqual(output4);
});

test('Should return the integer that appears an odd number of times', () => {
  expect(kata.findOdd(input5)).toEqual(output5);
});

test('Should return the integer that appears an odd number of times', () => {
  expect(kata.findOdd(input6)).toEqual(output6);
});