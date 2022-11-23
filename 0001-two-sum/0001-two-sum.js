/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    const result = []
    
    while(left < right) {
        const sum = sortedNums[left] + sortedNums[right];
        if (sum === target) return [nums.indexOf(sortedNums[left]), nums.lastIndexOf(sortedNums[right])];
        if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return null;
};