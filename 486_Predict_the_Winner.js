/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    if(!nums || !nums.length) false;
    
    //diff between 1st & 2nd player
    const dp = [];
    const len = nums.length;
    
    for(let i=0;i<len;i++) {
        dp.push([]);
        dp[i][i] = nums[i];
    }
    
    for(let j=1;j<len;j++) {
        for(let i=0;i+j<len;i++) {
            dp[i][i+j] = Math.max(nums[i]-dp[i+1][j+i], nums[i+j] - dp[i][i+j-1]);
        }
    }

    return dp[0][len-1] >=0;
    
};
