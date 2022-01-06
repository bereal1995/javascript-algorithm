/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let answer = 0;
    
    for(let x of nums) {
        const nLength = x.toString().length;
        if (nLength % 2 === 0) answer++
    }
    
    return answer
};