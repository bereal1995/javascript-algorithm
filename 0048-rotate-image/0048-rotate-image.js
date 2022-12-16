/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function swap({matrix, x1, y1, x2, y2}) {
    [matrix[x1][y1], matrix[x2][y2]] = [matrix[x2][y2], matrix[x1][y1]];
}
var rotate = function(matrix) {
    const n = matrix.length;
    
    for(let i=0; i<Math.floor(n/2); i++) {
        let endIdx = n - 1 - i;
        
        for(let j=0; j< endIdx - i; j++) {
            swap({matrix, x1: i, y1: i + j, x2:i + j, y2: endIdx}); // TopLeft => TopRight
            swap({matrix, x1: i, y1: i + j, x2: endIdx, y2: endIdx - j}); // TopLeft => BottomRight
            swap({matrix, x1: i, y1: i + j, x2: endIdx - j, y2: i}); // TopLeft => BottomLeft
        }
    }
    
    return matrix
};