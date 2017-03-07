/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        let total = 0, eof = false, temp;
        let bf = [];
        
        while(!eof && total < n) {
            temp = read4(bf);
            
            eof = temp < 4;
            
            temp = Math.min(temp, n-total);
            
            for(let i=0;i<temp;i++) {
                buf[total++] = bf[i];
            }
        }
        
        return total;
    };
};
