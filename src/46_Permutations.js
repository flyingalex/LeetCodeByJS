/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 46. Permutations
var permute = function(candidates) {
  const list = [];
  backtrack([], candidates);

  return list;
  function backtrack(tmplist, nums) {
    tmplist = [...tmplist];
    if(tmplist.length == nums.length){
      list.push(tmplist);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if(tmplist.includes(nums[i])) continue; // element already exists, skip
        tmplist.push(nums[i]);
        backtrack(tmplist, nums);
        // delete the last one
        tmplist.splice(-1,1);
      }
    } 
  }  
};