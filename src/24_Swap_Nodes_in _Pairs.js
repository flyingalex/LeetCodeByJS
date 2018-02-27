/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let index = 0;
  const dummy = new ListNode(0);
  dummy.next = head;
  current = dummy;
  while (current !== null && current.next && current.next.next !== null) {
    let first = current.next;
    let second = current.next.next;
    first.next = second.next;
    current.next = second;
    current.next.next = first;
    current = current.next.next;
  }
  return dummy.next;
};