'use strict';

const kata = require('./solution.js');

const input1 = [2, 3];
const output1 = "I I I I\n I I I \n       \n   I   ";

const input2 = [1, 2, 10];
const output2 = "I I I  \n I I I \n    I  \n       ";

test('Should create a visual representation of set bowling pins after removing "fallen" pins', () => {
  expect(kata.bowlingPins(input1)).toEqual(output1);
});

test('Should create a visual representation of set bowling pins after removing "fallen" pins', () => {
  expect(kata.bowlingPins(input2)).toEqual(output2);
});