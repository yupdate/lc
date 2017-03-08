/**
 * @param {string} s
 * @return {boolean}
 */
var oldisValid = (s) => {
    if(!s) return true;
    
    const stack = [];
    
    for(let i=0;i<s.length;i++) {
        if(['(', '{', '['].indexOf(s[i])>-1) {
            stack.push(s[i]);
        }else{
            switch(s[i]) {
                case ')': 
                    if(stack.pop()!=='(') return false;
                    break;
                case '}': 
                    if(stack.pop()!=='{') return false;
                    break;
                case ']': 
                    if(stack.pop()!=='[') return false;
                    break;
            }
        }
    }
    
    return !stack.length;
};

var isValid = (s) => {
    if(!s || s.length%2) {
        return false;
    }
    
    const arr = [];
    
    for(let i=0;i<s.length;i++) {
        if(s[i] === '(') {
            arr.push(')');
        }else if(s[i] === '[') {
            arr.push(']');
        }else if(s[i] === '{') {
            arr.push('}');
        }else if(!arr.length || arr.pop() !== s[i]) {
            return false;
        }
    }
    
    return !arr.length;
};
