/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = (nums) => {
  if (nums.length > 0) {
    const pos = nums.indexOf(Math.max.apply(null,nums));
    const root = new TreeNode(nums[pos]);
    root.left = constructMaximumBinaryTree(nums.slice(0, pos));
    root.right = constructMaximumBinaryTree(nums.slice(pos+1, nums.length));
    return root
  } else {
    return null;
  }
};
