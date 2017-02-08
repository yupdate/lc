/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function(s) {
    const len = s.length+1;
    
    let res = [];
    
    for(let i=1;i<=len;i++) {
        res.push(i);
    }
    
    for(let i=0;i<s.length;i++) {
        if(s[i] === 'D') {
            const cur = i;
            while(i<s.length && s[i]==='D') {
                i++;
            }
            res = res.slice(0, cur).concat(res.slice(cur, i+1).reverse(), res.slice(i+1));
        }

    }
    
    return res;
};
