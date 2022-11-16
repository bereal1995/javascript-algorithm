/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (!n) return nums1
    
    let i = nums1.length - 1;
    let r1 = m - 1;
    let r2 = n - 1;
    
    while(0 <= r1 && 0<= r2) {
        const num1 = nums1[r1];
        const num2 = nums2[r2];
        if (num1 >= num2) {
            nums1[i] = num1;
            r1--;
        } else {
            nums1[i] = num2;
            r2--;
        }
        i--;
    }
    
    while(0 <= r2) {
        nums1[i] = nums2[r2];
        r2--;
        i--;
    }
};