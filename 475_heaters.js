/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    if(!houses || !houses.length || !heaters || !heaters.length) 
        return -1;
        
    houses.sort((h1, h2)=>{ return h1-h2; });
    heaters.sort((h1, h2)=>{ return h1-h2; });
    
    let max = 0, heaterIndex = 0;
    
    houses.forEach((house, i)=>{
        while(heaterIndex<heaters.length-1 && heaters[heaterIndex]+heaters[heaterIndex+1]<=2*house) {
            heaterIndex++;
        }
        //or
        // while(heaterIndex<heaters.length-1 &&
        //       Math.abs(heaters[heaterIndex]-house)>=Math.abs(heaters[heaterIndex+1]-house)) {
        //     heaterIndex++;
        // }
        
        max = Math.max(max, Math.abs(heaters[heaterIndex]-house));
    });
    
    return max;
};
