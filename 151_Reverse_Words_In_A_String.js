var reverseWords = function(str) {
    const temp = str.split(' ');
    
    for(let i=temp.length-1;i>=0;i--) {
        temp[i] = temp[i].trim();
        if(!temp[i].length) {
            temp.splice(i, 1);
        }
    }
    
    return temp.reverse().join(' ');
};
