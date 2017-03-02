/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function f(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    const findBadVersion = (l, r) => {
        while(l<r) {
            const mid = l + parseInt((r-l)/2);
            if(isBadVersion(mid)) {
                r = mid;
            }else{
                l = mid+1;
            }
        }
        
        return l;
    };
    
    return function(n) {
        return findBadVersion(1, n);
    }
};
