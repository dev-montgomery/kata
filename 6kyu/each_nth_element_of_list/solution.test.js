'use strict';

const kata = require('./solution.js');

const index1 = 0; 
const array1 = [1,2,3,4,5,6];
const output1 = [];

const index2 = 1; 
const array2 = [1,2,3,4,5,6];
const output2 = [1,2,3,4,5,6];

const index3 = -1; 
const array3 = [1,2,3,4,5,6];
const output3 = [6,5,4,3,2,1];

const index4 = 2;
const array4 = [1,2,3,4,5,6];
const output4 = [2,4,6];

const index5 = -2; 
const array5 = [1,2,3,4,5,6];
const output5 = [5,3,1];

const index6 = 3; 
const array6 = [1,2];
const output6 = [];

const index7 = -3; 
const array7 = [1,2];
const output7 = [];

const index8 = 5; 
const array8 = [1,2,3,4,5,6,7];
const output8 = [5];

const index9 = -5;
const array9 = [1,2,3,4,5,6,7];
const output9 = [3];

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index1, array1)).toEqual(output1);
});

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index2, array2)).toEqual(output2);
});

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index3, array3)).toEqual(output3);
});

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index4, array4)).toEqual(output4);
});

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index5, array5)).toEqual(output5);
});

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index6, array6)).toEqual(output6);
});

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index7, array7)).toEqual(output7);
});

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index8, array8)).toEqual(output8);
});

test('should return every consecutive nth index of an array', () => {
  expect(kata.each(index9, array9)).toEqual(output9);
});