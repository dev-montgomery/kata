'use strict';

const kata = require('./solution');

const arg1 = {a:4, b:8, c:3};
const arg2 = {b:4, d:7};
const arg3 = {b:3, d:5, f:1};

const outputArg1Arg2 = {a:4, b:12, c:3, d:7};
const outputArg2Arg3 = {b:7, d:12, f:1};
const outputArg1Arg2Arg3 = {a:4, b:15, c:3, d:12, f:1};

const empty = {};

test('combines two or more objects', () => {  
  expect(kata.combine(empty)).toEqual({});
});

test('combines two or more objects', () => {  
  expect(kata.combine(arg1, arg2)).toEqual(outputArg1Arg2);
});

test('combines two or more objects', () => {  
  expect(kata.combine(arg2, arg3)).toEqual(outputArg2Arg3);
});

test('combines two or more objects', () => {  
  expect(kata.combine(arg1, arg2, arg3)).toEqual(outputArg1Arg2Arg3);
});