'use strict';

const kata = require('./solution.js');

const input1 = [7,3,10,1,0,5];
const expected1 = 
  "    10\n"+
  "    #\n"+
  "    #\n"+
  "7   #\n"+
  "#   #\n"+
  "#   #     5\n"+
  "#   #     #\n"+
  "# 3 #     #\n"+
  "# # #     #\n"+
  "# # # 1   #\n"+
  "# # # #   #\n"+
  "-----------\n"+
  "1 2 3 4 5 6\n";

const input2 = [0,0,0,0,0,0];
const expected2 = "-----------\n1 2 3 4 5 6\n";

test('Should create a histogram from an array of nums', () => {
  expect(kata.histogram(input1)).toEqual(expected1);
});

test('Should create a histogram from an array of nums', () => {
  expect(kata.histogram(input2)).toEqual(expected2);
});