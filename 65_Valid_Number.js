/**
 * @param {string} s
 * @return {boolean}
 */
var isNumbser = function(s) {
    s = s.trim();
    
    let numberSeen = false,
        pointSeen = false,
        eSeen = false,
        numberAfterE = true;

    for(let i=0;i<s.length;i++) {
        if(parseInt(s[i])>=0 && parseInt(s[i])<=9) {
            numberSeen = true;
            numberAfterE = true;
        }else if(s[i]==='.') {
            if(pointSeen || eSeen) {
                return false;
            }
            pointSeen = true;
        }else if(s[i]==='e' || s[i]==='E') {
            if(!numberSeen || eSeen) {
                return false;
            }
            eSeen = true;
            numberAfterE = false;
        }else if(s[i]==='+' || s[i]==='-'){
            if(i!==0 && (s[i-1]!=='e' && s[i-1]!=='E')){
                return false;
            }
        }else {
            return false;
        }
    }
    
    return numberSeen && numberAfterE;
};
