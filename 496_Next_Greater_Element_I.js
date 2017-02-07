/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    const map = {};
    const stack = [];
    
    for(let num of nums) {
        while(stack.length && stack[stack.length-1] < num) {
            map[stack.pop()] = num;
        }
        
        stack.push(num);
    }
    
    return findNums.map((num)=>{
        return map[num] || -1;
    });
};
