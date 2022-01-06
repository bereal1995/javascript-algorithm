/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // old
    // nums1.splice(m,n, ...nums2)
    // nums1.sort((a, b) => a - b)
    
    // new
    let copyNums1 = [...nums1]
    let p1 = 0
    let p2 = 0
    let index = 0
    
    while (p1 < m && p2 < n){
        let value1 = copyNums1[p1]
        let value2 = nums2[p2]
        if (value1 < value2){
            nums1[index] = value1
            p1 += 1
        } else {
            nums1[index] = value2
            p2 += 1
        }
        index += 1
    }
    
    if (p1 >= m){
        while (p2 < n){
            nums1[index] = nums2[p2]
            p2 += 1
            index += 1
        }
    } else {
        while (p1 < m){
            nums1[index] = copyNums1[p1]
            p1 += 1
            index += 1
        }
    }
};