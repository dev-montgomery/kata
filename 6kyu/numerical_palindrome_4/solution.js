'use strict';

const kata = module.exports = {};

kata.palindrome = function(num) { 
  if (typeof num !== 'number' || num < 0) return 'Not valid';

  const isPalindrome = function(num) {
    return (num.toString().split('').reverse().join('') == num && num > 10) ? true : false;
  };
  
  for (let i = 0 ; ; i++) {
    if (isPalindrome(num + i)) return num + i;
    if (isPalindrome(num - i)) return num - i;
  };
};