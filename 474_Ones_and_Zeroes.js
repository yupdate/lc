/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const counts = [];
    
    strs.forEach((str)=>{
        const zeros = str.length - str.replace(/0/g, "").length;
        const ones = str.length - str.replace(/1/g, "").length;
        
        counts.push([zeros, ones]);
    });
    
    const res = [];
    for(let i=0;i<=m;i++) {
        res.push(Array(n+1).fill(0));
    }
    
     //res[i][j] = the max number of strings that can be formed with i 0's and j 1's
    // from the first few strings up to the current string s
    // Catch: have to go from bottom right to top left
    // Why? If a cell in the res is updated(because s is selected),
    // we should be adding 1 to res[i][j] from the previous iteration (when we were not considering s)
    // If we go from top left to bottom right, we would be using results from this iteration => overcounting

    for(let k=0;k<counts.length;k++) {
        for(let i=m;i>=counts[k][0];i--) {
            for(let j=n;j>=counts[k][1];j--) {
                res[i][j] = Math.max(res[i][j], res[i-counts[k][0]][j-counts[k][1]]+1);       
            }
        }
    }
    console.log(counts,res);
    return res[m][n];
};
