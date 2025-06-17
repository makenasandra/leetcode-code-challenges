/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let prevIndex = 0;
    let currentIndex = 0;
    for(let i=0; i<s.length; i++){
        currentIndex = t.indexOf(s[i]);
        console.log(currentIndex)
        if(currentIndex < 0)return false;
        if(prevIndex > currentIndex) return false;
        prevIndex=currentIndex;
        t = t.replace(`${s[i]}`,"")
        console.log(t)
    }
    return true;
};

console.log(isSubsequence("aaaaaa","bbaaaa"));