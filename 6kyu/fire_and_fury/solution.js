'use strict';

const kata = module.exports = {};

kata.fireAndFury = function(tweet) {
  const words = tweet.match(/FIRE|FURY/g);
  const regex = /F|I|R|E|U|Y/;
  
  if (!words || tweet.split('').every(e => regex.test(e)) === false) return "Fake tweet.";

  let pattern = [], count = 0, prev = '';
  for (let i = 0 ; i < words.length ; ) {
    if (prev !== words[i]) {
      prev = words[i];
      count = 0;
    };
    while (prev === words[i]) {
      count++;
      i++;
    };
    pattern.push([prev, count]);
  };
  
  let message = [];
  
  const msgBuilder = (word, num) => {
    if (word === 'FIRE') {
      let andYous = ' and you'.repeat(num - 1);
      return `You${andYous} are fired!`;
    } else {
      let really = ' really'.repeat(num - 1);
      return `I am${really} furious.`;
    };
  };
  
  pattern.forEach(e => message.push(msgBuilder(e[0], e[1])));
  const answer = message.join(' ');
  
  return answer;
};