'use strict';

const kata = module.exports = {};

function translate(num, word) {
  switch(true) {
    case Number(num) < 2:
      return `${num} ${word}`;
    case Number(num) === 2:
      return `${num} bu${word.substring(0, word.length - 1)}`;
    case Number(num) > 2 && Number(num) < 10:
      return `${num} ${word.substring(0, word.length - 1)}zo`;
    case Number(num) > 9:
      return `${num} ga${word.substring(0, word.length - 1)}ga`;
  };
};

function weave(a1, a2) {
  let result = '';
  
  if (a1.length === a2.length) {
    for (let i = 0 ; i < a1.length ; i++) {
      result += a1[i] + a2[i];
    };
  };
  
  if (a1.length > a2.length) {
    for (let i = 0 ; i < a1.length ; i++) {
      a1[i] ? result += a1[i] : result += '';
      a2[i] ? result += a2[i] : result += '';
    };
  };
  
  if (a1.length < a2.length) {
    for (let i = 0 ; i < a2.length ; i++) {
      a2[i] ? result += a2[i] : result += '';
      a1[i] ? result += a1[i] : result += '';
    };
  };
  
  return result;
};

kata.sursurungal = txt => {
  const regex = /\d+\s+\w+/g;
  const items = txt.match(regex);
  
  if (items.length === 1) return translate(items[0].split(' ')[0], items[0].split(' ')[1]);
  
  const translateAllItems = items.map(each => translate(each.split(' ')[0], each.split(' ')[1]));
  const fillers = txt.split(regex).filter(e => e !== '');
  
  return weave(translateAllItems, fillers);
};