/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let answer = '';
    let count = 0;
    let isUp = true;
    let arrs = Array.from({length: numRows}, () => [])
    
    if (numRows === 1) {
        return s
    }
    
    for(const x of s) {
        arrs[count].push(x);
        isUp ? count++ : count--;
        
        if (count === numRows || count === -1) {
            isUp = !isUp
        }
        // 최대값일때
        if (count === numRows) {
            count -= 2;
        }
        // 최소값일때
        if (count === -1) {
            count += 2;
        }
    }
    
    answer = arrs.flat().join('')
    
    return answer
};