/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log('mergedArray', mergedArray)
    const length = mergedArray.length - 1;
    
    if (length === 0) {
        return mergedArray[0]
    }
    
    if (length % 2 === 0) {
        return mergedArray[Math.ceil(length/2)]
    }
    
    return (mergedArray[Math.ceil(length/2)] + mergedArray[Math.ceil(length/2) - 1]) / 2
};