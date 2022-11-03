/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let leftIdx = 0;
    let rightIdx = 0;
    let sum = 0;
    let result = Number.MAX_SAFE_INTEGER;
    
    
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        
        while(sum >= target) {
            result = Math.min(result, i + 1 - leftIdx);
            sum -= nums[leftIdx++];
        }
    }
    
    return result !== Number.MAX_SAFE_INTEGER ? result : 0;
};