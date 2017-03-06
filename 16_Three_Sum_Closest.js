/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(!nums || !nums.length) {
        return [];
    }
    
    nums.sort((a, b) => { return a-b; });
    
    let res;
    
    for(let i=0;i<nums.length-2;i++) {
        if(i===0 || nums[i] !== nums[i-1]) {
            let l = i+1, r=nums.length-1;
            
            while(l<r) {
                let sum = nums[i] + nums[l] + nums[r];
                if(res === undefined || Math.abs(res-target) > Math.abs(sum-target)) {
                    res = sum;
                }

                if(sum > target) {
                    r--;
                }else {
                    l++;
                }
            }
        }
    }
    
    return res;
};
