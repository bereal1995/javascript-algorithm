/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const n = arr.length;
    const lastNum = arr[arr.length - 1]
    const nonMissArr = Array.from({length: lastNum}, (_, i) => i + 1)
    let count = k;
    let answer = 0;
    
    
    for(let i=0; i<nonMissArr.length; i++) {
        if (!arr.includes(nonMissArr[i])) --count;
        if (count === 0) {
            answer = nonMissArr[i]
            break;
        };
    }
    
    return answer ? answer : nonMissArr.pop() + count;
};