'use strict';

const kata = require('./solution.js');

// should return true
const arr1 = [ 1, 1, 1 ];
const arr2 = [ 2, 2, 2 ];          

// should return true
const arr3 = [ 1, [ 1, 1 ] ];
const arr4 = [ 2, [ 2, 2 ] ];  

// should return false 
const arr5 = [ 1, [ 1, 1 ] ];
const arr6 = [ [ 2, 2 ], 2 ];

// should return flase
const arr7 = [ 1, [ 1, 1 ] ];
const arr8 = [ [ 2 ], 2 ]; 

// should return true
const arr9 = [ [ [ ], [ ] ] ];
const arr10 = [ [ [ ], [ ] ] ];

// should return false
const arr11 = [ [ [ ], [ ] ] ];
const arr12 = [ [ 1, 1 ] ];     

test('Should compare two arguments and return true if they have the same nesting structures', () => {
  expect(kata.sameStructureAs(arr1, arr2)).toBe(true);
});

test('Should compare two arguments and return true if they have the same nesting structures', () => {
  expect(kata.sameStructureAs(arr3, arr4)).toBe(true);
});

test('Should compare two arguments and return true if they have the same nesting structures', () => {
  expect(kata.sameStructureAs(arr5, arr6)).toBe(false);
});

test('Should compare two arguments and return true if they have the same nesting structures', () => {
  expect(kata.sameStructureAs(arr7, arr8)).toBe(false);
});

test('Should compare two arguments and return true if they have the same nesting structures', () => {
  expect(kata.sameStructureAs(arr9, arr10)).toBe(true);
});

test('Should compare two arguments and return true if they have the same nesting structures', () => {
  expect(kata.sameStructureAs(arr11, arr12)).toBe(false);
});