/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = [];
    while (matrix.length > 0 && matrix[0].length) {
        //if (matrix.length[0] === 0) break;
        res.push(...matrix.shift())
        for (let i = 0; i < matrix.length - 1; i++) {
            res.push(matrix[i].pop())
            //if(matrix[i].length==0) matrix.splice(i,1);
            // return matrix
        }
         
        if (matrix.length > 0) {
            matrix[matrix.length - 1].reverse();
            res.push(...matrix.pop());
        } else {
            break;
        }
        console.log({res})
        console.log({matrix})
            for (let j = matrix.length - 1; j >= 0; j--) {
                if (matrix[j].length > 0) {
                    res.push(matrix[j].shift())
                    //console.log({res})
                    // res.push(200)
                    // return matrix
                }
                
            }

        console.log({result: res})
        
    }
    return res;
};
console.log(spiralOrder([[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20]]))