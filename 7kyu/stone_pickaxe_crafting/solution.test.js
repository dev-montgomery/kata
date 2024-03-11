'use strict';

const kata = require('./solution.js');

const input1 = ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"];
const output1 = 1;

const input2 = ["Wood", "Cobblestone", "Cobblestone", "Cobblestone"];
const output2 = 1;

const input3 = [];
const output3 = 0;

const input4 = ["Sticks", "Wool", "Cobblestone"];
const output4 = 0;

const input5 = ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"];
const output5 = 2;

test('Should return number of "pickaxes" that can be made from an array of "materials"', () => {
  expect(kata.stonePick(input1)).toEqual(output1);
});

test('Should return number of "pickaxes" that can be made from an array of "materials"', () => {
  expect(kata.stonePick(input2)).toEqual(output2);
});

test('Should return number of "pickaxes" that can be made from an array of "materials"', () => {
  expect(kata.stonePick(input3)).toEqual(output3);
});

test('Should return number of "pickaxes" that can be made from an array of "materials"', () => {
  expect(kata.stonePick(input4)).toEqual(output4);
});

test('Should return number of "pickaxes" that can be made from an array of "materials"', () => {
  expect(kata.stonePick(input5)).toEqual(output5);
});