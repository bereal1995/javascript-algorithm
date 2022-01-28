/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // old
    // let zeroCount = 0;
    // for(let i=0; i<nums.length; i++) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1)
    //         i--
    //         zeroCount++
    //     }
    // }  
    // for(let i=0; i<zeroCount; i++) {
    //     nums.push(0)
    // }
    
    // new
    let left = 0;
    let temp;
    
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] !== 0){
            temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            
            left++;
        }
    }
};