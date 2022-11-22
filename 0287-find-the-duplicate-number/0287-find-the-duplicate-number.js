/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++) {
        const value = Math.abs(nums[i]);
        if (nums[value] < 0) return value;
        nums[value] = -nums[value];
    }
    return 0
};