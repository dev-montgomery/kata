'use strict';

const kata = module.exports = {};

kata.doMath = function(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let array = string.split(' ').map(e => e = [e.replace(/\d+/g, ''), e.replace(/[a-z]/g, '')]);
  
  let s = [];
  for (let i = 0 ; i < alphabet.length ; i++) {
    for (let u = 0 ; u < array.length ; u++) {
      if (array[u][0] === alphabet[i]) {
        s.push(parseInt(array[u][1]));
      };
    };
  };
  
  let operations = ['+', '-', '*', '/'], answer = s[0];
  
  function m(num1, operation, num2) {
    switch(operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: 'invalid';
    };
  };
  
  for (let i = 1, u = 0 ; i < s.length ; i++) {
    answer = m(answer, operations[u], s[i]);
    u = (u + 1) % operations.length;
  };
  return Math.round(answer);
};