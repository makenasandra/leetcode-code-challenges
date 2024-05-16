/**
 * Two positive integers N and M are given. Integer N represents the number
 of chocolates arranged in a circle, numbered from 0 to N − 1.
You start to eat the chocolates. After eating a chocolate you
 leave only a wrapper.
You begin with eating chocolate number 0.
 Then you omit the next M − 1 chocolates or wrappers on the circle,
  and eat the following one.
More precisely, if you ate chocolate number X, then you will next eat
the chocolate with number (X + M) modulo N (remainder of division).
You stop eating when you encounter an empty wrapper.
For example, given integers N = 10 and M = 4.
 You will eat the following chocolates: 0, 4, 8, 2, 6.
The goal is to count the number of chocolates that you will eat,
 following the above rules.
Write a function:
    def solution(N, M)
that, given two positive integers N and M,
 returns the number of chocolates that you will eat.
For example, given integers N = 10 and M = 4. the function should return 5,
 as explained above.
Assume that:
N and M are integers within the range [1..1,000,000,000].
Complexity:
    * expected worst-case time complexity is O(log(N+M));
    * expected worst-case space complexity is O(log(N+M)).
 */
function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let position = 0;
let count = 0;
getChocolates(N, M);


function getChocolates(N, M) {
    position += M;
    count++;
    if(position%N === 0){
        // console.log( count)
        return count;
    }
    getChocolates(N, M);
}
    return count;
}



let result = solution(13, 8);
console.log(result);




