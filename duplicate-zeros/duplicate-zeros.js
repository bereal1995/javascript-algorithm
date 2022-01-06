/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zeroCount = 0;
    let n = arr.length;
    
    for (let x of arr) {
        if (x === 0) zeroCount++;
    }
    
    for (let i = n-1; i >= 0; i--) {
        let j = i + zeroCount;

        if (arr[i] == 0) {
            if (j < n) arr[j] = 0;
            zeroCount--;
            j--;
        }

        if (j < n) arr[j] = arr[i];
    }
};