/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let say = '1';
    
    const count = (str) => {
        let res = '', acc = 0;
        
        for(let i=0;i<str.length;i++) {
            acc++;
            if(i<str.length-1 && str[i] !== str[i+1]) {
                res += (acc + str[i]);
                acc=0;
            }
        }
        
        if(acc) {
            res += (acc + str[str.length-1]);
        }
        return res;
    };
    
    for(let i=1;i<n;i++) {
        say = count(say);
    }
    
    return say;
};
