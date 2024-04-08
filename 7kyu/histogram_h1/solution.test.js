'use strict';

const kata = require('./solution.js');

const input1 = [7, 3, 10, 1, 0, 5];
const output1 = `6|##### 5\n5|\n4|# 1\n3|########## 10\n2|### 3\n1|####### 7`;

const input2 = [0, 0, 0, 0, 0, 14];
const output2 = `6|############## 14\n5|\n4|\n3|\n2|\n1|`;

const input3 = [6, 5, 4, 3, 2, 1];
const output3 = `6|# 1\n5|## 2\n4|### 3\n3|#### 4\n2|##### 5\n1|###### 6`;

test('Should return a histogram respresentation of array data', () => {
  expect(kata.histogram(input1)).toEqual(output1);
});

test('Should return a histogram respresentation of array data', () => {
  expect(kata.histogram(input2)).toEqual(output2);
});

test('Should return a histogram respresentation of array data', () => {
  expect(kata.histogram(input3)).toEqual(output3);
});