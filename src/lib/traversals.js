'use strict';

const preOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  callback(rootNode.value);
  preOrderTraversal(rootNode.left, callback);
  preOrderTraversal(rootNode.right, callback);
  return undefined;
};

const postOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  postOrderTraversal(rootNode.left, callback);
  postOrderTraversal(rootNode.right, callback);
  callback(rootNode);
  return undefined;
};

const inOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  inOrderTraversal(rootNode.left, callback);
  callback(rootNode);
  inOrderTraversal(rootNode.right, callback);
  return undefined;
};

export { postOrderTraversal, preOrderTraversal, inOrderTraversal };
