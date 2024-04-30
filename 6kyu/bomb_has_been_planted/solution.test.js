'use strict';

const kata = require('./solution.js');

const map1 = [
  ["CT", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "B"]
];
const time1 = 7;
const output1 = false;

const map2 = [["CT", "B", "0", "0", "0"]];
const time2 = 9;
const output2 = false;

const map3 = [
  ["CT", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "B", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];
const time3 = 13;
const output3 = true;

const map4 = [
  ["0", "0", "0", "CT"],
  ["0", "0", "0", "0"],
  ["B", "0", "0", "0"]
];
const time4 = 13;
const output4 = true;

const map5 = [
  ["0", "0", "0", "0", "0", "0"],
  ["CT", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "B"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "K", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"]
];
const time5 = 13;
const output5 = true;

const map6 = [
  ["0", "K", "0", "CT"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
  ["B", "0", "0", "0"]
];
const time6 = 12;
const output6 = true;

test('Should check the distance between CT and K and B of the first argument array, and return whether the moves can be completed within a second argument of time.', () => {
  expect(kata.bombHasBeenPlanted(map1, time1)).toEqual(output1);
});

test('Should check the distance between CT and K and B of the first argument array, and return whether the moves can be completed within a second argument of time.', () => {
  expect(kata.bombHasBeenPlanted(map2, time2)).toEqual(output2);
});

test('Should check the distance between CT and K and B of the first argument array, and return whether the moves can be completed within a second argument of time.', () => {
  expect(kata.bombHasBeenPlanted(map3, time3)).toEqual(output3);
});

test('Should check the distance between CT and K and B of the first argument array, and return whether the moves can be completed within a second argument of time.', () => {
  expect(kata.bombHasBeenPlanted(map4, time4)).toEqual(output4);
});

test('Should check the distance between CT and K and B of the first argument array, and return whether the moves can be completed within a second argument of time.', () => {
  expect(kata.bombHasBeenPlanted(map5, time5)).toEqual(output5);
});

test('Should check the distance between CT and K and B of the first argument array, and return whether the moves can be completed within a second argument of time.', () => {
  expect(kata.bombHasBeenPlanted(map6, time6)).toEqual(output6);
});