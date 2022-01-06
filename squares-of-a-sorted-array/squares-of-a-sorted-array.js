/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let answser = [];
    
    for(let i=0; i<nums.length; i++) {
        const num = nums[i] ** 2;
        answser.push(num)
    }
    
    return answser.sort((a, b) => a - b)
};