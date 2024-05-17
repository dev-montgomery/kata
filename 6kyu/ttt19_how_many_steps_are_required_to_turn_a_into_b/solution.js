'use strict';

const kata = module.exports = {};

kata.howManySteps = (a,b) => {
  if (a === b) return 0;

  const queue = [[a, 0]];
  const visited = new Set();

  visited.add(a);

  while (queue.length > 0) {
    const [current, steps] = queue.shift();

    const nextStepDouble = current * 2;
    const nextStepAdd = current + 1;

    if (nextStepDouble === b || nextStepAdd === b) return steps + 1;

    if (nextStepDouble <= b && !visited.has(nextStepDouble)) {
      visited.add(nextStepDouble);
      queue.push([nextStepDouble, steps + 1]);
    };

    if (nextStepAdd <= b && !visited.has(nextStepAdd)) {
      visited.add(nextStepAdd);
      queue.push([nextStepAdd, steps + 1]);
    };
  };
};