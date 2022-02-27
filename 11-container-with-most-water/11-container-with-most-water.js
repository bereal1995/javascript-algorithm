/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    
    while (i < j) {
        // 비교할 값 (index * 최솟값) 최솟값으로 하는이유는 양꼭지의 최저점으로 체크함
        let cur = (j - i) * Math.min(height[i], height[j]);
        // 최대 값
        max = Math.max(cur, max);
        height[i] <= height[j] ? i++ : j--;
    }
    
    return max
};