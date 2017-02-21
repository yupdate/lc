var isPalindrome = function(s) {
    let newStr = s.split('').filter((c)=>{ return c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90 || c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122 || c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57; });

    return newStr.concat().reverse().join('').toLowerCase() === newStr.join('').toLowerCase();
};
