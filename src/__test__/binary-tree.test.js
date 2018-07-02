'use strict';

import binaryTree from '../model/binary-tree';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '../lib/traversals';

describe('PRE-ORDER', () => {
  test('Expecting a string of visited nodes as 1, 2, 6, 7, 8, 9, 3, 4, 5,', () => {
    let str = '';
    preOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    console.log(str); /* eslint-disable-line */
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});

describe('POST-ORDER', () => {
  test('Expecting a string of visited nodes as 1, 2, 6, 7, 8, 9, 3, 4, 5, ', () => {
    let str = '';
    postOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
      str.toString();
    });
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});

describe('IN-ORDER', () => {
  test('Expecting a string of visited nodes as 1, 2, 6, 7, 8, 9, 3, 4, 5, ', () => {
    let str = '';
    inOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});
