/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = function(root) {
  const queue = [root];

  while(queue.length !== 0) {
    root =  queue.splice(0, 1)[0];
    if (root.right instanceof TreeNode) {
      queue.push(root.right);
    }
    if (root.left instanceof TreeNode) {
      queue.push(root.left);
    }
  }
  return root.left || root.val;
};
