/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(candidates) {
  const list = [];
  candidates.sort((x, y) => x -y);
  backtrack([], candidates, Array(candidates.length).fill(false));

  return list;
  function backtrack(tmplist, nums, used) {
    tmplist = [...tmplist];
    if(tmplist.length == nums.length){
      list.push(tmplist);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if(used[i] || i > 0 && nums[i] == nums[i-1] && !used[i - 1]) continue;
        used[i] = true; 
        tmplist.push(nums[i]);
        backtrack(tmplist, nums, used);
        used[i] = false;
        // delete the last one
        tmplist.splice(-1,1);
      }
    } 
  }  
};