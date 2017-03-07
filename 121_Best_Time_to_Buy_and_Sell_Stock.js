/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var res = 0, min = Number.MAX_VALUE;
    
    for(let p of prices){
        min = Math.min(p, min);
        res = Math.max(res, p-min);
    }
    
    return res;
};
