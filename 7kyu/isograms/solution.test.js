'use strict';

const kata = require('./solution.js');

const input1 = "Dermatoglyphics";
const output1 = true;

const input2 = "isogram";
const output2 = true;

const input3 = "aba";
const output3 = false;

const input4 = "moOse";
const output4 = false;

const input5 = "isIsogram";
const output5 = false;

const input6 = "";
const output6 = true;

test('Should check for repeating letters and return true if there are no repeats, or false if there are', () => {
  expect(kata.isIsogram(input1)).toEqual(output1);
});

test('Should check for repeating letters and return true if there are no repeats, or false if there are', () => {
  expect(kata.isIsogram(input2)).toEqual(output2);
});

test('Should check for repeating letters and return true if there are no repeats, or false if there are', () => {
  expect(kata.isIsogram(input3)).toEqual(output3);
});

test('Should check for repeating letters and return true if there are no repeats, or false if there are', () => {
  expect(kata.isIsogram(input4)).toEqual(output4);
});

test('Should check for repeating letters and return true if there are no repeats, or false if there are', () => {
  expect(kata.isIsogram(input5)).toEqual(output5);
});

test('Should check for repeating letters and return true if there are no repeats, or false if there are', () => {
  expect(kata.isIsogram(input6)).toEqual(output6);
});