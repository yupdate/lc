/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if(!nums || !nums.length) return 0;
    
    let maxLen = 0, flipIndex = -1, l=0, r=0;
    while(r<nums.length) {
        if(nums[r]===1) {
            r++;
        }else{
            if(flipIndex<0) {
                flipIndex = r;
                r++;
            }else{
                l=flipIndex+1;
                flipIndex=r;
                r++;
            }
        }
        maxLen = Math.max(maxLen, r-l);
    }
    
    return maxLen;
};487. Max Consecutive Ones II
