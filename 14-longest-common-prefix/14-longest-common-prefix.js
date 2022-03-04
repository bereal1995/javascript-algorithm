/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = "";
    // 제일짧은 단어를 최대 길이로 설정
    let maxWordLength = Math.min(...strs.map(str => str.length));
    
    if (!strs.length) return answer
    
    for (let i=0; i<maxWordLength; i++) {
        // 첫번째 단어 추출
        const prefix = strs[0][i];
        // every로 배열을 돌면서 첫번째 단어가 모두 일치하는지확인
        if (strs.every(str => str[i] === prefix)) {
            answer += prefix
        } else {
            break;
        }
    }
    
    return answer;
    
};