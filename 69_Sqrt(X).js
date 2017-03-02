/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<0) return 0;
    
    let num = 0;
    while(num*num<=x) {
        num++;
    }
    
    return --num;
};
