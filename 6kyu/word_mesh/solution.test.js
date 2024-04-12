'use strict';

const kata = require('./solution.js');

const input1 = ["beacon","condominium","umbilical","california"];
const output1 = "conumcal";

const input2 = ["allow","lowering","ringmaster","terror"];
const output2 = "lowringter";

const input3 = ["abandon","donation","onion","ongoing"];
const output3 = "dononon";

const input4 = ["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"];
const output4 = "ownhippuscartpher"	;    

const input5 = ["sandal", "dalmation", "korea"];
const output5 = 'failed to mesh';

test('Should return a string made of substrings from "meshing" words in an array or if they don\'t mesh, return "failed to mesh"', () => {
	expect(kata.wordMesh(input1)).toEqual(output1);
});

test('Should return a string made of substrings from "meshing" words in an array or if they don\'t mesh, return "failed to mesh"', () => {
	expect(kata.wordMesh(input2)).toEqual(output2);
});

test('Should return a string made of substrings from "meshing" words in an array or if they don\'t mesh, return "failed to mesh"', () => {
	expect(kata.wordMesh(input3)).toEqual(output3);
});

test('Should return a string made of substrings from "meshing" words in an array or if they don\'t mesh, return "failed to mesh"', () => {
	expect(kata.wordMesh(input4)).toEqual(output4);
});

test('Should return a string made of substrings from "meshing" words in an array or if they don\'t mesh, return "failed to mesh"', () => {
	expect(kata.wordMesh(input5)).toEqual(output5);
});