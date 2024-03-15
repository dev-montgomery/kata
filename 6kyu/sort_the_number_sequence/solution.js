'use strict';

const kata = module.exports = {};

kata.sortSequence = sequence => {
  let sections = [], temp = [];
  
  sequence.forEach(value => {
    if (value !== 0) {
      temp.push(value);
    } else {
      sections.push(temp);
      temp = [];
    };
  });
  
  const ascendingSectionValues = sections.map(value => value = value.sort((a,b) => a - b));
  const summedSections = ascendingSectionValues.map(nums => nums = [nums, nums.reduce((a,b) => a + b)]);
  
  const bubbleSort = arr => {
    const n = arr.length;
    for (let i = 0 ; i < n - 1 ; i++) {
      for (let j = 0 ; j < n - i - 1 ; j++) {
        if (arr[j][1] > arr[j + 1][1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        };
      };
    };
    return arr;
  };
  
  const sortedTotals = bubbleSort(summedSections);
  // const ascending = sortedTotals.map(value => value = value[1]);
  const removedTotals = sortedTotals.map(each => each = each[0]);
  const answerJoinedWithZeros = removedTotals.reduce((a,b) => a.concat(0).concat(b)).concat(0);
  
  return answerJoinedWithZeros;
};