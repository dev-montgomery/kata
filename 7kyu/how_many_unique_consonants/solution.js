'use strict';

const kata = module.exports = {};

kata.countConsonants = str => {
  const removedNonLettersAndVowels = str.toLowerCase().split('')
    .filter(e => /\w/.test(e))
    .filter(e => !/a|e|i|o|u|[0-9]/.test(e));
  const removedDups = Array.from(new Set(removedNonLettersAndVowels));
  const answer = removedDups.length;
  
  return answer;
};