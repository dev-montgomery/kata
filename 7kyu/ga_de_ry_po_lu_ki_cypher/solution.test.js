'use strict';

const kata = require('./solution.js');

test('Should use a cypher to return an encoded message or a decoded message', () => {
  expect(kata.encode("Ala has a cat")).toEqual("Gug hgs g cgt");
});

test('Should use a cypher to return an encoded message or a decoded message', () => {
  expect(kata.decode("Gug hgs g cgt")).toEqual("Ala has a cat");
});

test('Should use a cypher to return an encoded message or a decoded message', () => {
  expect(kata.encode("ABCD")).toEqual("GBCE");
});

test('Should use a cypher to return an encoded message or a decoded message', () => {
  expect(kata.decode("GBCE")).toEqual("ABCD");
});

test('Should use a cypher to return an encoded message or a decoded message', () => {
  expect(kata.encode("gaderypoluki")).toEqual("agedyropulik");
});

test('Should use a cypher to return an encoded message or a decoded message', () => {
  expect(kata.decode("agedyropulik")).toEqual("gaderypoluki");
});