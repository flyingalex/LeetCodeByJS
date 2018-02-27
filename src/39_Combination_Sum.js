/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const list = [];
  candidates.sort((x, y) => x - y);
  backtrack([], candidates, target, 0);

  return list;
  function backtrack(tmplist, nums, remain, start) {
    tmplist = [...tmplist];
    if (remain < 0) {
      return;
    } else if (remain === 0) {
      list.push(tmplist);
    } else {
      for (let i = start; i < nums.length; i++) {
        tmplist.push(nums[i]);
        backtrack(tmplist, nums, remain - nums[i], i);
        // delete the last one
        tmplist.splice(-1,1);
      }
    }
  }
};