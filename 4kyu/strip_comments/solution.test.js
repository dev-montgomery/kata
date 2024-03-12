'use strict';

const kata = require('./solution.js');
const tests = [
  ['aa bb cc', [], 'aa bb cc'],
  ['aa bb cc  ', [], 'aa bb cc'],
  ['  aa bb cc', [], '  aa bb cc'],
  ['  aa # bb # cc  ', [], '  aa # bb # cc'],
  
  ['aa bb cc', ['#'], 'aa bb cc'],
  ['aa bb # cc', ['#'], 'aa bb'],
  ['aa# bb cc', ['#'], 'aa'],
  ['aa #bb cc', ['#'], 'aa'],
  ['aa # bb # cc', ['#'], 'aa'],
  ['#aa bb cc', ['#'], ''],
  
  ['#aa bb\ncc dd', ['#'], '\ncc dd'],
  ['aa # bb\ncc dd', ['#'], 'aa\ncc dd'],
  ['aa bb\n#cc dd', ['#'], 'aa bb\n'],
  ['aa bb\ncc # dd', ['#'], 'aa bb\ncc'],
  ['aa bb\ncc dd#', ['#'], 'aa bb\ncc dd'],
  
  ['aa bb\ncc dd', ['#', '!'], 'aa bb\ncc dd'],
  ['aa # bb\ncc dd', ['#', '!'], 'aa\ncc dd'],
  ['aa bb\ncc ! dd', ['#', '!'], 'aa bb\ncc'],
  ['#aa bb\n!cc dd', ['#', '!'], '\n'],
  ['aa ! bb\ncc # dd', ['#', '!'], 'aa\ncc'],
  ['aa bb#\ncc dd!', ['#', '!'], 'aa bb\ncc dd'],
  
  ['aa + bb\ncc - dd\nee * ff', ['+', '-', '*'], 'aa\ncc\nee'],
  ['aa / bb\ncc ^ dd\nee $ ff', ['/', '^', '$'], 'aa\ncc\nee']
];

tests.forEach(input => {
  test('Should take a string and an array of markers and for each new line, remove everything after the markers', () => {
    expect(kata.solution(input[0], input[1])).toEqual(input[2]);
  });
});