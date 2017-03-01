/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//solution 1
var old_moveZeroes = function(nums) {
    if(!nums || nums.length < 2) {
        return;
    }
    
    let index=0;
    
    nums.forEach((val)=>{
        if(val !== 0) {
            nums[index] = val;
            index++;
        }
    });
    
    for(let i=index;i<nums.length;i++) {
        nums[i] = 0;
    }
    
};

//solution2
var moveZeroes = function(nums) {
  for(let i=nums.length-1;i>=0;i--) {
      if(!nums[i]) {
          nums.splice(i, 1);
          nums.push(0);
      }
  }  
};
