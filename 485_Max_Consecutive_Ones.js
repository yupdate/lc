/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxLen = 0, curLen = 0;
    
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === 0) {
            curLen = 0;
        }else{
            curLen++;
            maxLen = Math.max(maxLen, curLen);
        }
    }
    
    return maxLen;
};
