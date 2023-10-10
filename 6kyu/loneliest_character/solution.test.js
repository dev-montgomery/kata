'use strict';

const kata = require('./solution.js');

const input1 = "a b  c";
const input2 = "a bcs           d k";
const input3 = "    a b  sc     p     t   k";
const input4 = "a  b  c  de";
const input5 = "     a  b  c de        ";
const input6 = "abc";

const output1 = ["b"];
const output2 = ["d"];
const output3 = ["p"];
const output4 = ["b", "c"];
const output5 = ["b"];
const output6 = ["a", "b", "c"];

test('Should return true', () => {
  expect(kata.loneliest(input1)).toEqual(output1);
});

test('Should return true', () => {
  expect(kata.loneliest(input2)).toEqual(output2);
});

test('Should return true', () => {
  expect(kata.loneliest(input3)).toEqual(output3);
});

test('Should return true', () => {
  expect(kata.loneliest(input4)).toEqual(output4);
});

test('Should return true', () => {
  expect(kata.loneliest(input5)).toEqual(output5);
});

test('Should return true', () => {
  expect(kata.loneliest(input6)).toEqual(output6);
});