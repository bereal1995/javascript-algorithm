/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                // 조건문 확인하면서 stack.pop() 실행
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    return stack.length === 0;
};