/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    const collections = nums.map((n, index)=>{
        return [n, index]; 
    });
    
    collections.sort((c1, c2)=>{
        return c2[0] - c1[0];
    });
    
    const res = [];
    collections.forEach((val, index)=>{
        res[val[1]] = getRanking(index);
    });
    
    return res;
};

const getRanking = (i) => {
    let res;
    
    switch(i) {
        case 0: res = 'Gold Medal'; break;
        case 1: res = 'Silver Medal'; break;
        case 2: res = 'Bronze Medal'; break;
        default: res = i+1+'';
    }
    
    return res;
};
