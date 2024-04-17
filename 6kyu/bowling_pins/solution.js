'use strict';

const kata = module.exports = {};

kata.bowlingPins = arr => {
  let pins = [7,' ',8,' ',9,' ',10,'\n',' ',4,' ',5,' ',6,' ','\n',' ',' ',2,' ',3,' ',' ','\n',' ',' ',' ',1,' ',' ',' '];
  
  arr.forEach(pin => pins[pins.indexOf(pin)] = ' '); // remove pins
  
  return pins.map(pin => typeof pin === 'number' ? pin = 'I' : pin).join('');
};