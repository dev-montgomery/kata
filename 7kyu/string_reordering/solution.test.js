'use strict';

const kata = require('./solution');

const input = [
  {'4': 'a' }, {'2': 'Haynes'}, {'3': 'is'}, 
  {'-2': 'Andy'}, {'5': 'pretty'}, {'6': 'funny'}, {'12': 'comedian.'} 
];

const output = 'Andy Haynes is a pretty funny comedian.';

test('Arranges array of key-value pairs and returns a sentence', () => {
  expect(kata.sentence(input)).toEqual(output);
});