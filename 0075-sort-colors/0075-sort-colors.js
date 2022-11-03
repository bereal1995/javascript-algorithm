/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero_idx = 0;
    let idx = 0;
    let two_idx = nums.length - 1;
    
    while(idx <= two_idx) {
        if (nums[idx] === 0) {
            let tmp = nums[idx];
            nums[idx] = nums[zero_idx];
            nums[zero_idx] = tmp;
            zero_idx++;
            idx++;
        } else if (nums[idx] === 2) {
            let tmp = nums[idx];
            nums[idx] = nums[two_idx];
            nums[two_idx] = tmp;
            two_idx--;
        } else {
            idx++;
        }
    }
};