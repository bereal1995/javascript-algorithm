/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const n = arr.length;
    let start = 0;
    let end = n - 1;
    
    if (n < 3) return false
    
    for(let i=0; i<n; i++) {
        if (arr[i] < arr[i + 1]) {
            start++;
        } else {
            break;
        }
    }
    
    for(let j=n-1; j>0; j--) {
        if (arr[j] < arr[j - 1]) {
            end--;
        } else {
            break;
        }
    }
    
    console.log('start', start)
    console.log('end', end)
    return start > 0 && start < n - 1 && start === end;
};