/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const newNums = nums.concat(nums);
    
    const map = {};
    const stack = [];
    
    for(let i=0;i<newNums.length;i++) {
        while(stack.length && stack[stack.length-1][0] < newNums[i]) {
            map[stack.pop()[1]] = newNums[i];
        }
        stack.push([newNums[i], i]);
    }
    return nums.map((cur, index)=>{
        return map[index] === undefined ? -1 : map[index];
    });
};
