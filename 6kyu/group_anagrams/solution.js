'use strict';

const kata = module.exports = {};

kata.groupAnagrams = words => {
  const anagramMap = new Map();

  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (!anagramMap.has(sortedWord)) {
      anagramMap.set(sortedWord, []);
    }
    anagramMap.get(sortedWord).push(word);
  }
  return Array.from(anagramMap.values());
};