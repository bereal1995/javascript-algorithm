/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let answer = "";
    
    for (let x of s) {
        const index = x.charCodeAt();
        
        if (index >= 65 && index <= 90) {
            answer += String.fromCharCode(index + 32);
        } else {
            answer += x    
        }
        
    }
    
    return answer;
};