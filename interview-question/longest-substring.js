/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    let count = {};

    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        count[c] = (count[c] || 0) + 1;
        
        while (count[c] > 1) {
            console.log(count)
            count[s[left]] -= 1;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;    
};

lengthOfLongestSubstring("pwwkew")