/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0] || b[1]-a[1]); // 0번째 인덱스 기준으로 정렬 같으면 1번째 인덱스로 정렬 이렇게하면 반복문에서 1번째 값만 비교하면 됨
    let count=0;
    
    for (let i=1,prev=0; i<intervals.length; i++) {
        if (intervals[prev][1] >= intervals[i][1]) {
            count++  
        } else {
            prev=i;
        }
    }
    return intervals.length-count;
};