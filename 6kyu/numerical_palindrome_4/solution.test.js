'use strict';

const kata = require('./solution');

const input1 = 8;
const output1 = 11;

const input2 = 281;
const output2 = 282;

const input3 = 8812;
const output3 = 8778;

const input4 = 100891;
const output4 = 101101;

const input5 = 1221;
const output5 = 1221;

const input6 = 'Hannah';
const output6 = 'Not valid';

const input7 = '75634';
const output7 = 'Not valid';

const input8 = -64746;
const output8 = 'Not valid';

test('should search and return the closest numerical palindrome', () => {
  expect(kata.palindrome(input1)).toEqual(output1);
});

test('should search and return the closest numerical palindrome', () => {
  expect(kata.palindrome(input2)).toEqual(output2);
});

test('should search and return the closest numerical palindrome', () => {
  expect(kata.palindrome(input3)).toEqual(output3);
});

test('should search and return the closest numerical palindrome', () => {
  expect(kata.palindrome(input4)).toEqual(output4);
});

test('should search and return the closest numerical palindrome', () => {
  expect(kata.palindrome(input5)).toEqual(output5);
});

test('should search and return the closest numerical palindrome', () => {
  expect(kata.palindrome(input6)).toEqual(output6);
});

test('should search and return the closest numerical palindrome', () => {
  expect(kata.palindrome(input7)).toEqual(output7);
});

test('should search and return the closest numerical palindrome', () => {
  expect(kata.palindrome(input8)).toEqual(output8);
});