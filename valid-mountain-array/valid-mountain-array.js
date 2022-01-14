/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const n = arr.length;
    let start = 0;
    let end = n - 1;
    
    if (n < 3) return false
    
    for (let x of arr) {
        if (arr[start] < arr[start + 1]) {
            start++;
        }
        if (arr[end] < arr[end - 1]) {
            end--;
        }
    }
    
    if (start === end) {
        if (start === 0) return false;
        if (start === (n - 1)) return false;
        
        return true;
    }
    return false;
};