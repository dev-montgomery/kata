'use strict';

const kata = require('./solution.js');

const input1 = "zodiac";
const output1 = 26;

const input2 = "chruschtschov";
const output2 = 80;

const input3 = "khrushchev";
const output3 = 38;

const input4 = "strength";
const output4 = 57;

const input5 = "catchphrase";
const output5 = 73;

const input6 = "twelfthstreet";
const output6 = 103;

const input7 = "mischtschenkoana";
const output7 = 80;

const input8 = "az";
const output8 = 26;


test("Should return the highest consecutive consonant charCodeAt values", () => {
  expect(kata.solve(input1)).toEqual(output1);  
});

test("Should return the highest consecutive consonant charCodeAt values", () => {
  expect(kata.solve(input2)).toEqual(output2);  
});

test("Should return the highest consecutive consonant charCodeAt values", () => {
  expect(kata.solve(input3)).toEqual(output3);  
});

test("Should return the highest consecutive consonant charCodeAt values", () => {
  expect(kata.solve(input4)).toEqual(output4);  
});

test("Should return the highest consecutive consonant charCodeAt values", () => {
  expect(kata.solve(input5)).toEqual(output5);  
});

test("Should return the highest consecutive consonant charCodeAt values", () => {
  expect(kata.solve(input6)).toEqual(output6);  
});

test("Should return the highest consecutive consonant charCodeAt values", () => {
  expect(kata.solve(input7)).toEqual(output7);  
});

test("Should return the highest consecutive consonant charCodeAt values", () => {
  expect(kata.solve(input8)).toEqual(output8);  
});