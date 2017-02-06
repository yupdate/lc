/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.replace(/-/g, '');
    
    if(!S || !K || S.length<K)  return S;
    
    let formatted = [];
    
    for(let i=S.length-1;i>=0;i-=K) {
        let temp = S.substring(Math.max(i-K+1, 0), i+1).toUpperCase();
        formatted.unshift(temp);
    }
    
    return formatted.join('-');
};
