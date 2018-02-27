var threeSum = function(nums) {
  const result = [];
  if (nums.length < 3) return result;
  nums.sort((x, y) => x - y);
  const target = 0
  let last = nums.length;
  for (let a = 0; a < last - 2; a++) {
    let b = a + 1;
    let c = last - 1;
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    while(b < c) {

      if ((nums[a] + nums[b] + nums[c]) < target) {
        b++;
        while(nums[b] === nums[b - 1] && b < c) b++;
      } else if ((nums[a] + nums[b] + nums[c]) > target) {
        c--;
        while(nums[c] === nums[c + 1] && b < c) c--;
      } else {
        result.push([ nums[a], nums[b],nums[c] ]);
        b++;
        c--;
        while((nums[b] === nums[b - 1]) && (nums[c] === nums[c + 1]) && b < c) b++;
      }
    }
  }
  return result;
};