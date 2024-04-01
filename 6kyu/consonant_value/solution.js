'use strict';

const kata = module.exports = {};

kata.solve = s => {
  const splitAtTheVowels = s.split(/[aeiou]/i).filter(e => e !== '');
  const a = [];
  
  for (let i = 0 ; i < splitAtTheVowels.length ; i++) {
    const val = splitAtTheVowels[i];
    
    if (val.length === 1) {
      a.push(val.charCodeAt(0) - 96)
    } else {
      const t = val.split('');
      let values = 0;
      for (let u = 0 ; u < t.length ; u++) {
        values += t[u].charCodeAt(0) - 96;
      };
      a.push(values);
      values = 0;
    };
  };

  return Math.max(...a);
};