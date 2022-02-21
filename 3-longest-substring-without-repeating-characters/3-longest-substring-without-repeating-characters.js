/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0, right = 0;
    let answer = 0;
    
    while(right < s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right))
            answer = Math.max(set.size,answer)
            right++;
        }else{
            set.delete(s.charAt(left));
            left++;
        }
    }
    
    return answer;
};