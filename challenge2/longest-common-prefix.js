/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonLetter = new Set();
    let result = "";
    let proceed = true;
    strs.sort();
    let firstString = strs[0];
    strs.sort();
    while(proceed === true){
        for(let i = 0; i <= firstString.length - 1; i++){
            for(let j = 1; j <= strs.length - 1; j++){
                // console.log(`${i} == ${j} ${i}`)
                
                if(firstString[i] == strs[j][i] && proceed == true){
                    proceed = true;
                    result += firstString[i]
                    commonLetter.add(firstString[i])
                    console.log('comparing '+firstString+ ' with '+ j + strs[j])
                    // console.log(strs)
                    // console.log(strs)
                    console.log(firstString[i] + strs[j][i])
                   
                   
                } else {
                    proceed = false;
                    // console.log('False' + firstString[i] + strs[j][i])
                    break;
                }
            }
        }
        
    }
   
    result = [...commonLetter].toString().replace(',','');
    return result;
}

// longestCommonPrefix(["flower","flow","flight", "flaw"])
// strs1 = ["flower","flow","flight", "flaw"]
console.log(longestCommonPrefix(["flower","flow","flight"]))


// solutions

var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
      let char = strs[0][i];
      if (strs.every(str => str[i] === char)) {
        prefix += char;
      } else {
        break;
      }
    };  
    return prefix;
  };


  var longestCommonPrefix = function(strs) {
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
      if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
    }
    return strs[0];
  };