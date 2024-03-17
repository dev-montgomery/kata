'use strict';

const kata = require('./solution.js');

const tests = [
  ['FURYYYFIREYYFIRE', "I am furious. You and you are fired!"],
  ['FIREYYFURYYFURYYFURRYFIRE', "You are fired! I am really furious. You are fired!"],
  ['FYRYFIRUFIRUFURE', "Fake tweet."]
];

tests.forEach(input => {
  test('Should take an input string and return a message by parsing the valid words and what they mean', () => {
    expect(kata.fireAndFury(input[0])).toEqual(input[1]);
  });
});