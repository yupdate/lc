/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

var findTargetSumWays = function(nums, S) {
    if(!nums || !nums.length) return 0;
    const calc = [];
    for(let i=0;i<nums.length;i++)
        calc.push([]);
        
    return findSum(nums, S, 0, calc);
};

var findSum = function(nums, sum, index, calc){
    if(index >= nums.length) {
        return sum === 0 ? 1 : 0;
    }
    
    const shift = [-1, 1];
    let res = 0;
    calc[index+1] = calc[index+1] || {};

    for(let inc of shift) {
        if(calc[index+1][(sum+inc*nums[index]) + ''] === undefined)
            calc[index+1][(sum+inc*nums[index]) + ''] = findSum(nums, sum+inc*nums[index], index+1, calc);
        res += calc[index+1][sum+inc*nums[index]+''];
    }
    
    return res;
}
