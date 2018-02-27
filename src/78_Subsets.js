var subsets = function(candidates) {
   const list = [];
  backtrack([], candidates, 0);

  return list;
  function backtrack(tmplist, nums, start) {
    tmplist = [...tmplist];
    list.push(tmplist);
    for (let i = start; i < nums.length; i++) {
      tmplist.push(nums[i]);
      backtrack(tmplist, nums, i + 1);
      // delete the last one
      tmplist.splice(-1,1);
    }
  } 
};