/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let numArr = [];
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31);
    let sign = "+";
    const stringArr = s.trimStart().split('')
    
    if (stringArr[0] === "-" || stringArr[0] === "+") {
        sign = stringArr[0]
        stringArr.shift()
    }
    
    for (let x of stringArr) {
        if (isNaN(x) || x === " ") {
            break;
        }
        numArr.push(x)
    }
    
    let num = Number(numArr.join('')) ?? 0;
    if (sign === "-") {
        num = num * -1;
        if (num < min) {
            num = min
        }
    } 
    
    if (num > max) {
        num = max
    }
    
    return num;
};