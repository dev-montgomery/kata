'use strict';

const kata = module.exports = {};

const TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

kata.arrayToTree = array => {
  function buildTree(index) {
    if (index >= array.length) return;

    const node = new TreeNode(array[index]);

    node.left = buildTree(2 * index + 1);
    node.right = buildTree(2 * index + 2);

    return node;
  };
  return buildTree(0);
};