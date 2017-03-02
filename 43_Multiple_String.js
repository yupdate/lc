/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const m = num1.length, n = num2.length;
    
    const arr = Array(m+n).fill(0);
    
    for(let i=m-1;i>=0;i--) {
        for(let j=n-1;j>=0;j--) {
            let temp = parseInt(num1[i]) * parseInt(num2[j]);
            const p1 = i+j, p2 = i+j+1;
            temp += arr[p2];
            
            arr[p1] += parseInt(temp/10);
            arr[p2] = temp%10;
        }
    }

    //remove zero ahead
    while(arr[0] === 0) {
        arr.shift();console.log(arr)
    }
    
    //zero corner case
    return arr.join('') || '0';
};
