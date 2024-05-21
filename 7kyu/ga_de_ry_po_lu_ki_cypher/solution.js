'use strict';

const kata = module.exports = {};

kata.generateCypher = key => {
  const encodeMap = {};
  const decodeMap = {};

  const pairs = key.split('-');
  pairs.forEach(pair => {
    const [a, b] = pair.split('');
    encodeMap[a] = b;
    encodeMap[b] = a;
    encodeMap[a.toLowerCase()] = b.toLowerCase();
    encodeMap[b.toLowerCase()] = a.toLowerCase();
    decodeMap[a] = b;
    decodeMap[b] = a;
    decodeMap[a.toLowerCase()] = b.toLowerCase();
    decodeMap[b.toLowerCase()] = a.toLowerCase();
  });

  return { encodeMap, decodeMap };
};

kata.encode = str => {
  const key = "GA-DE-RY-PO-LU-KI";
  const { encodeMap } = kata.generateCypher(key);
  return str.split('').map(char => encodeMap[char] || char).join('');
};

kata.decode = str => {
  const key = "GA-DE-RY-PO-LU-KI";
  const { decodeMap } = kata.generateCypher(key);
  return str.split('').map(char => decodeMap[char] || char).join('');   
};