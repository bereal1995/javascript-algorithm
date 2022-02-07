/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let left = 0;
    let temp;
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] % 2 === 0) {
            temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            
            left++
        }
    }
    
    return nums
};