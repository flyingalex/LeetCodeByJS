/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(candidates) {
  const list = [];
  candidates.sort((x, y) => x -y);
  backtrack([], candidates, 0);

  return list;
  function backtrack(tmplist, nums, start) {
    tmplist = [...tmplist];
    list.push(tmplist);
    for (let i = start; i < nums.length; i++) {
      // 初了第一个跳过重复
      if(i > start && nums[i] == nums[i-1]) continue; 
      tmplist.push(nums[i]);
      backtrack(tmplist, nums, i + 1);
      // delete the last one
      tmplist.splice(-1,1);
    }
  }  
};