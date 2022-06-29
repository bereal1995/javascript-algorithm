/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let answer = -1;
    let mind = Number.MAX_SAFE_INTEGER
    
    for(let i=0; i<points.length; i++) {
        if (mind === 0) break;
        let x_d = x - points[i][0];
        let y_d = y - points[i][1];
        
        if (x_d !== 0 && y_d !== 0) continue;
        
        const distance = Math.abs(x_d) + Math.abs(y_d);
        if (distance < mind) {
            answer = i;
            mind = distance;
        }
    }
    
    return answer;
};