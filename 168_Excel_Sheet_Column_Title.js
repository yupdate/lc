/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n < 1) {
        return "";
    }
    
    let res = "";
    const aCharCode = 'A'.charCodeAt(0);
    
    while(n>0) {
        let cur = (n-1)%26;
        res = String.fromCharCode(aCharCode + cur) + res;
        n = parseInt((n-1)/26);
    }
    
    return res;
};
