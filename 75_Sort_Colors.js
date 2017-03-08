/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeros = -1, twos = nums.length;
    let i=0;
    while(i<twos){
        if(nums[i]===0) {
            zeros++;
            [nums[zeros], nums[i]] = [nums[i], nums[zeros]]; 
            i++;
        }else if(nums[i]===2){
            twos--;
            [nums[twos], nums[i]] = [nums[i], nums[twos]]; 
        }else{
            i++;
        }
    }

};

