'use strict';

const kata = require('./solution');

test('takes a number of seconds and returns a human readable format', () => {
  expect(kata.formatDuration(1)).toEqual('1 second');
});

test('takes a number of seconds and returns a human readable format', () => {
  expect(kata.formatDuration(1)).toEqual('1 second');
});

test('takes a number of seconds and returns a human readable format', () => {
  expect(kata.formatDuration(62)).toEqual('1 minute and 2 seconds');
});

test('takes a number of seconds and returns a human readable format', () => {
  expect(kata.formatDuration(120)).toEqual('2 minutes');
});

test('takes a number of seconds and returns a human readable format', () => {
  expect(kata.formatDuration(3600)).toEqual('1 hour');
});

test('takes a number of seconds and returns a human readable format', () => {
  expect(kata.formatDuration(3662)).toEqual('1 hour, 1 minute and 2 seconds');
});