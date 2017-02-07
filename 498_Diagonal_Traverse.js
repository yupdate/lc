/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(!matrix || !matrix.length) return [];
    const res = [];
    const m = matrix.length;
    const n = matrix[0].length;
    const shift = [-1, 1];
    let shiftX, shiftY;
    
    for(let round = 0;round < m+n-1;round++) {
        shiftX = shift[round%2];
        let startX = round%2 ? 0 : round;
        while(startX>=0 && round-startX>=0) {
            if(startX<m  && round-startX<n)
                res.push(matrix[startX][round-startX]);
            startX+=shiftX;
        }
    }
    
    return res;
};
