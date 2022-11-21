/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    for(let i=0; i<intervals.length; i++) {
        const interval = intervals[i];
        const right = interval[1];
        const nextInterval = intervals[i + 1];
        
        if (nextInterval && right >= nextInterval[0]) {
            interval[1] = Math.max(right, nextInterval[1])
            intervals.splice(i + 1 , 1)
            i -= 1
        }
    }
    
    return intervals
};