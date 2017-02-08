/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    if(!points || !points.length) {
        return 0;
    }
    
    let res = 0;
    for(let i=0;i<points.length;i++){
        let temp = {};
        for(let j=0;j<points.length;j++){
            if(i===j){
                continue;
            }
            const dis = (points[i][0]-points[j][0])*(points[i][0]-points[j][0]) + (points[i][1]-points[j][1])* (points[i][1]-points[j][1]);
            //distance2(points[i], points[j]);
            if(temp[dis]){
                temp[dis]++;
            }else{
                temp[dis] = 1;
            }
        }
        
        Object.values(temp).forEach((v)=>{ res+=v*(v-1); });
    }
    
    return res;
};
