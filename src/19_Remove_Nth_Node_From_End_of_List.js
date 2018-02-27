/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const heads = [];
    const first = new ListNode(0);
    first.next = head;
    head = first;

    while (head.next !== null) {
      heads.push(head);
      head = head.next;
    }
    heads.push(head);

    const index = heads.length - n;
    heads[index - 1].next = heads[index + 1] ? heads[index+1] : null;
    return heads[0].next;
};