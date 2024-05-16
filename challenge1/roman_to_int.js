/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    let number = 0
    let toSum = []


    for (let i = 0; i <= s.length - 1; i++) {
        switch (s[i]) {
            case "I": toSum.push(1)
                break
            case "V": toSum.push(5)
                break
            case "X": toSum.push(10)
                break
            case "L": toSum.push(50)
                break
            case "C": toSum.push(100)
                break
            case "D": toSum.push(500)
                break
            case "M": toSum.push(1000)
                break
        }

    }
   
    for (let n = 0; n <= toSum.length - 1; n++) {
        if (n == toSum.length - 1 || toSum[n] > toSum[n + 1] || toSum[n] == toSum[n + 1]) {
            
            number += toSum[n];
           
        } else {
            number += toSum[n + 1] - toSum[n];   
            n ++;
        }
    }
    return number;
};

/**
 * Runtime
100 ms

Memory
47.5 MB
 */

