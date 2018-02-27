/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
        if(i > start && nums[i] == nums[i-1]) continue; // skip findDuplicates
        tmplist.push(nums[i]);
        backtrack(tmplist, nums, remain - nums[i], i + 1);
        // delete the last one
        tmplist.splice(-1,1);
      }
    }
  }
};