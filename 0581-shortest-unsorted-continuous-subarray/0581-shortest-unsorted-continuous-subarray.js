/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let flag = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      flag = true;
    }
    if (flag) {
      min = Math.min(min, nums[i]);
    }
  }

  flag = false;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i - 1]) {
      flag = true;
    }
    if (flag) {
      max = Math.max(max, nums[i]);
    }
  }

  let l = 0;
  let r = 0;

  for (let i = 0; i < nums.length; i++) {
    l = i;
    if (min < nums[i]) break;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    r = i;
    if (max > nums[i]) break;
  }

  if (r === 0) return 0;

  return r - l + 1;
};
