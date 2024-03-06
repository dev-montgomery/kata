'use strict';

const kata = module.exports = {};

kata.sameStructureAs = (array1, array2) => {
  const hasSameStructure = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return false;
    };

    if (arr1.length !== arr2.length) {
      return false;
    };

    for (let i = 0 ; i < arr1.length ; i++) {
      if (Array.isArray(arr1[i])) {
        if (!hasSameStructure(arr1[i], arr2[i])) {
          return false;
        };
      } else if (Array.isArray(arr2[i])) {
        return false;
      };
    };

    return true;
  };

  return hasSameStructure(array1, array2);
};