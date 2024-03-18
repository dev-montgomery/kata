'use strict';

const kata = require('./solution.js');

const tests = [
  [[17], {"value":17}],
  [[17, 0, -4, 3, 15], {"value":17,"left":{"value":0,"left":{"value":3},"right":{"value":15}},"right":{"value":-4}}],
  [[614, -7860, 3722, -6381, 2873, 7990, 7910, 2464, 1066, 4837, -3517, -6643,2026], {"value":614,"left":{"value":-7860,"left":{"value":-6381,"left":{"value":2464},"right":{"value":1066}},"right":{"value":2873,"left":{"value":4837},"right":{"value":-3517}}},"right":{"value":3722,"left":{"value":7990,"left":{"value":-6643},"right":{"value":2026}},"right":{"value":7910}}}]
];

tests.forEach(input => {
  test('Should return a binary tree from an array', () => {
    expect(kata.arrayToTree(input[0])).toEqual(input[1]);
  });
});