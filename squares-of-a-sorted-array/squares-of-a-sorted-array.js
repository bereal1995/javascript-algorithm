/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let answser = nums.map((num) => num*num);
    
    return answser.sort((a, b) => a - b)
};