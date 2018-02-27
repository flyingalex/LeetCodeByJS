/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    const usedObj = {};
    const results = [];
    for(let i = 0; i < nums.length; i++) {
        if (usedObj[nums[i]]) {
          results.push(nums[i]);
        } else {
          usedObj[nums[i]] = true; 
        }
    }
    return results;
};