/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums) return 0;
    
    let index=0;
    
    while(index<nums.length-1) {
        if(nums[index] === nums[index+1]) {
            nums.splice(index+1, 1);
        }else{
            index++;
        }
    }
    
    return nums.length;
};
