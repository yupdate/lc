/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(!a || !b) {
        return a || b;
    }
    
    let i=a.length-1, j=b.length-1, add = 0, res = '';
    while(i>=0 && j>=0) {
        const cur = parseInt(a[i]) + parseInt(b[j]) + add;
        res = cur%2 + res;
        add = parseInt(cur/2);
        i--;j--;
    }
    
    const remaining = i>=0 ? a : b;
    let k = i>=0 ? i: j;
    
    while(k>=0) {
        const cur = parseInt(remaining[k]) + add;
        res = cur%2 + res;
        add = parseInt(cur/2);
        k--;
    }
    
    return add ? add + res : res;
    
};
