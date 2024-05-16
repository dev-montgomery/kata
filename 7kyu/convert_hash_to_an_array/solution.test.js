'use strict';

const kata = require('./solution.js');

const input1 = {name: "Jeremy"};
const output1 = [["name", "Jeremy"]];

const input2 = {name: "Jeremy", age: 24};
const output2 = [["age", 24], ["name", "Jeremy"]];

const input3 = {name: "Jeremy", age: 24, role: "Software Engineer"};
const output3 = [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]];

const input4 = {product: "CodeWars", powerLevelOver: 9000};
const output4 = [["powerLevelOver", 9000], ["product", "CodeWars"]];

const input5 = {};
const output5 = [];

test('Should accept hash and return the entries in a sorted array', () => {
  expect(kata.convertHashToArray(input1)).toEqual(output1);
});

test('Should accept hash and return the entries in a sorted array', () => {
  expect(kata.convertHashToArray(input2)).toEqual(output2);
});

test('Should accept hash and return the entries in a sorted array', () => {
  expect(kata.convertHashToArray(input3)).toEqual(output3);
});

test('Should accept hash and return the entries in a sorted array', () => {
  expect(kata.convertHashToArray(input4)).toEqual(output4);
});

test('Should accept hash and return the entries in a sorted array', () => {
  expect(kata.convertHashToArray(input5)).toEqual(output5);
});