/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolList = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let answer = 0;
    
    for(let i = 0; i < s.length; i+=1){
        symbolList[s[i]] < symbolList[s[i+1]] ? answer -= symbolList[s[i]]: answer += symbolList[s[i]]
    }
    
    return answer
};