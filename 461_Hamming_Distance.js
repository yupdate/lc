/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let totle = x^y;
    
    let count=0;
    
    while(totle) {
        count++;
        totle &= (totle-1);
    }
    
    return count;
};
