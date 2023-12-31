'use strict';

const kata = require('./solution');

const input1 = '123 45 6';
const input1Count = 7;
const output1 = '123  45\n6';

const input2 = '12 45 1234 12';
const input2Count = 6;
const output2 = '12  45\n1234\n12';

const input3 = '123';
const input3Count = 7;
const output3 = '123';

const input4 = '';
const input4Count = 10;
const output4 = '';

const lipsumInput = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

const lipsumInputCount = 30;

const lipsumOutput = 'Lorem  ipsum  dolor  sit amet,\nconsectetur  adipiscing  elit.\nVestibulum    sagittis   dolor\nmauris,  at  elementum  ligula\ntempor  eget.  In quis rhoncus\nnunc,  at  aliquet orci. Fusce\nat   dolor   sit   amet  felis\nsuscipit   tristique.   Nam  a\nimperdiet   tellus.  Nulla  eu\nvestibulum    urna.    Vivamus\ntincidunt  suscipit  enim, nec\nultrices   nisi  volutpat  ac.\nMaecenas   sit   amet  lacinia\narcu,  non dictum justo. Donec\nsed  quam  vel  risus faucibus\neuismod.  Suspendisse  rhoncus\nrhoncus  felis  at  fermentum.\nDonec lorem magna, ultricies a\nnunc    sit    amet,   blandit\nfringilla  nunc. In vestibulum\nvelit    ac    felis   rhoncus\npellentesque. Mauris at tellus\nenim.  Aliquam eleifend tempus\ndapibus. Pellentesque commodo,\nnisi    sit   amet   hendrerit\nfringilla,   ante  odio  porta\nlacus,   ut   elementum  justo\nnulla et dolor.';

test('takes in a string and a width per line and returns justified text', () => {
  expect(kata.justify(input1, input1Count)).toEqual(output1);
});

test('takes in a string and a width per line and returns justified text', () => {
  expect(kata.justify(input2, input2Count)).toEqual(output2);
});

test('takes in a string and a width per line and returns justified text', () => {
  expect(kata.justify(input3, input3Count)).toEqual(output3);
});

test('takes in a string and a width per line and returns justified text', () => {
  expect(kata.justify(input4, input4Count)).toEqual(output4);
});

test('takes in a string and a width per line and returns justified text', () => {
  expect(kata.justify(lipsumInput, lipsumInputCount)).toEqual(lipsumOutput);
});