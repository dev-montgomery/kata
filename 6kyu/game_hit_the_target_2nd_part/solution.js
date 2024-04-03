'use strict';

const kata = module.exports = {};

kata.solution = mtrx => {
  let xData, arrowData;
  
  mtrx.forEach((e,i) => {
    for (let index = 0 ; index < e.length ; index++) {
      if (e[index] === 'x') xData = [index, i];
      if (e[index] !== ' ' && e[index] !== 'x') arrowData = [index, i, e[index]];
    };
  });
  
  switch (arrowData[2]) {
    case '<':
      return xData[0] < arrowData[0] && xData[1] === arrowData[1] ? true : false;
    case '>':
      return xData[0] > arrowData[0] && xData[1] === arrowData[1] ? true : false;
    case '^':
      return xData[1] < arrowData[1] && xData[0] === arrowData[0] ? true : false;
    case 'v':
      return xData[1] > arrowData[1] && xData[0] === arrowData[0] ? true : false;
  };
};