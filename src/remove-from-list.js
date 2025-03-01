const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// let l = [3, 1, 2, 3, 4, 5];

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

function removeKFromList(l, k) {
  let cur = l;
  let prev = l;
  while (cur !== null) {
    if (cur.value === k) {
      if (cur === prev) {
        l = l.next;
        cur = l;
        prev = l;
      } else prev.next = cur.next;
    } else prev = cur;
    cur = cur.next;
  }
  return l;
}


module.exports = {
  removeKFromList,
};
