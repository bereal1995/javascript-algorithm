/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    const regex = new RegExp(allowed)
    
    for (let word of words) {
        let flag = true;
        
        for (let s of word) {
            if (!allowed.includes(s)) {
                flag = false
            }
        }
        if (flag) count++;
    }
    
    return count;
};