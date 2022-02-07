/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const answer = [...new Set(nums)].sort((a, b) => b - a)
    
    if (answer.length < 3) {
        return answer[0]
    }
        
    return answer[2]
};