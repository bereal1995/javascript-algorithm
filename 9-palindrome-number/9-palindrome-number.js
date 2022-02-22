/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if(x.toString().split('').reverse().join('') !== x.toString()) return false
    
    return true
};