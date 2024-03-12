'use strict';

const kata = module.exports = {};

kata.valueOfX = eq => {
  const equation = eq.split(' ');
  const equal = equation.indexOf('=');
  const x = equation.indexOf('x');
  let negativeX, num1 = 0, num2 = 0, operand = '', left, right;
  
  const equate = (num1, num2, operand) => {
    return operand === '-' ? num1 - num2 : num1 + num2;
  };
  
  for (let i = 0 ; i < equation.length ; i++) {
    if (equation[i] === '-' && i + 1 === x) {
      negativeX = true;
      i++;
    };
    
    if (/\+|\-/.test(equation[i])) {
      operand = equation[i];
      i++;
    };
    
    if (/\d/.test(equation[i])) {
      if (operand === '') operand = '+';
      num2 = Number(equation[i]);
    };
    
    if (num2 >0) {
      num1 = equate(num1, num2, operand);
      operand = '';
      num2 = 0;
    };
    
    if (i === equal) {
      left = num1;
      num1 = 0;
    };
    
    if (i === equation.length - 1) {
      right = num1;
    };
  };
  
  const result = x < equal ? right - left : left - right;
  
  return negativeX ? result * -1 : result;
};