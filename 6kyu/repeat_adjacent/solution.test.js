'use strict';

const kata = require('./solution.js');

const tests = [
  ["ccccoodeffffiiighhhhhhhhhhttttttts", 3],
  ["soooooldieeeeeer", 0],
  ["", 0],
  ["aaaa", 0],
  ["ccccoooooooooooooooooooooooddee", 1],
  ["chaaallengee", 1],
  ["wwwwaaaarrioooorrrrr", 2],
  ["gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp", 2]
];

test('It should return the total number of "big groups" of 2 or more identical letters in 2 or more adjacent groups', () => {
  tests.forEach(argument => {
    expect(kata.repeatAdjacent(argument[0])).toEqual(argument[1]);
  });
});