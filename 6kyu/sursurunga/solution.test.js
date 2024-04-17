'use strict';

const kata = require('./solution.js');

const tests = [
  ["0 tomato","0 tomato"],
  ["1 tomato", "1 tomato"],
  ["2 tomatoes", "2 butomatoe"],
  ["3 tomatoes", "3 tomatoezo"],
  ["5 tomatoes", "5 tomatoezo"],
  ["7 tomatoes", "7 tomatoezo"],
  ["3 tomatoes", "3 tomatoezo"],
  ["10 tomatoes", "10 gatomatoega"]
];

test('Should translate input string into "sursurunga" and return the translation', () => {
  tests.forEach(input => {
    expect(kata.sursurungal(input[0])).toEqual(input[1]);
  });
});