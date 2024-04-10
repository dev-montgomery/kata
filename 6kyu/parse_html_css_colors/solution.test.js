'use strict';

const kata = require('./solution.js');

const input1 = '#80FFA0';
const output1 = { r: 128, g: 255, b: 160 };

const input2 = '#3B7';
const output2 = { r: 51, g: 187, b: 119 };

const input3 = 'LimeGreen';
const output3 = { r: 50, g: 205, b: 50 };

test('Should parse string into an rgb value', () => {
	expect(kata.parseHTMLColor(input1)).toEqual(output1);
});

test('Should parse string into an rgb value', () => {
	expect(kata.parseHTMLColor(input2)).toEqual(output2);
});

test('Should parse string into an rgb value', () => {
	expect(kata.parseHTMLColor(input3)).toEqual(output3);
});