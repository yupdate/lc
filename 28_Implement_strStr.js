/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) {
        return 0;
    }
    
    if(!haystack|| haystack.length < needle.length) {
        return -1;
    }
    
    for(let i=0;i<=haystack.length - needle.length;i++) {
        if(needle === haystack.slice(i, i+needle.length)) {
            return i;
        }
    }
    
    return -1;
};
