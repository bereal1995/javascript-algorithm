/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const max = Math.max(...nums)
    const clearLength = nums.length - 1
    const targetLength = nums.filter(num => max >= num * 2).length;
    
    if (nums.length === 1) return 0
    if (targetLength === clearLength) return nums.findIndex(num => num === max)
    
    return -1
};