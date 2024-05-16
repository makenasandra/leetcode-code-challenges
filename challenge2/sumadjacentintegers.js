/**
 * There is a string S that consists only  of non zero digits (1-9). We can choose two adjacents digits in S and replace them with their sum  but only if the sum is not greater than 9 . For example  if S = "356" we can replace" 35 "with" 8 " achieving " 86 " but we cannot replace 56 with 11. the operation may be applied multiple times in order to produce a final answer.
what is the lexicographically largest string we can obtain ?
A string made of digits is lexicographically larger than some other string if it has larger digit at the first position on which they differ. For exampke string "123" is lexicographically larger than "1134" as at the first position they differ, the first string has digit "2" and the second string has digit "1"
Write a function that given a string S returns lexicographically largest string we can obtain from S.
Examples:
Assuming S= "32581" it is optimal to replace "32" with "5" and "81" with "9". The function should return "559".
Assuming S= "1119812" it is optimal to replace "11" with "2" obtaining 219812. replace "21" with 3 and 81 with 9. the function should return "3992".
*/

let largestString = (strs) => {
  for (let i = 0; i < strs.length-1; i++) {
    // console.log(strs.length);
    let sum = 0;
    while (sum <= 9) {
      sum = Number(strs[i]) + Number(strs[i + 1]);
      let sumedString = strs[i] + strs[i + 1];
    //   console.log(`${i} sum: ` + sum);
      if (sum <= 9) {
        strs = strs.replace(sumedString, sum);
        // console.log(strs);
      }
    }
  }
  return strs;
};

console.log(largestString("1119812"));

//attempt 2
const largestLexicographicalString = function(S) {
    const digits = S.split('');
  
    let i = 0;
    while (i < digits.length - 1) {
      const sum = Number(digits[i]) + Number(digits[i + 1]);
  
      if (sum <= 9) {
        // Replace the pair with their sum
        digits.splice(i, 2, String(sum));  
        // Move back one position if possible
        i = Math.max(0, i - 1);
      } else {
        // Move to the next pair
        i++;
      }
    }
  
    return digits.join('');
  };

console.log(largestLexicographicalString("1119812"));



