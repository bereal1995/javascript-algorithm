/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const strList = new Map();
    
    for(let x of s) {
        if (strList.has(x)) {
            strList.set(x, strList.get(x) + 1)
        } else {
            strList.set(x, 1)
        }
    }
    
    return new Set([...strList.values()]).size > 1 ? false : true
};