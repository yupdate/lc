/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function(points) {
    const hashset = new Set();
    
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    
    points.forEach((p)=>{
        max = Math.max(max, p[0]);
        min = Math.min(min, p[0]);
        hashset.add(p[0]+'##'+p[1]);
    });

    const sum = max + min;
    
    for(let i=0;i<points.length;i++) {
        const reflect = sum-points[i][0]+'##'+points[i][1];
        if(!hashset.has(reflect)) {
            return false;
        }
    }
    
    return true;
};
