/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let result = 0;
  if (nums.length < 3) return result;
  nums.sort((x, y) => x - y);
  let minGap = Number.MAX_SAFE_INTEGER;
  let last = nums.length;
  for (let a = 0; a < last - 2; a++) {
    let b = a + 1;
    let c = last - 1;
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    while(b < c) {
      const sum = nums[a] + nums[b] + nums[c];
      gap = Math.abs(sum - target);

      if (gap < minGap) {
        result = sum;
        minGap = gap;
      }

      if (sum < target) b++;
      else              c--;
    }
  }
  return result;
};