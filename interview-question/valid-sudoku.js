/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
   
   
    let isValid = false;
    
    for (let i = 0; i < board.length; i++) {
        const rowSet = new Set();
        const columnSet = new Set();
      
        for (let j=0; j < board[i].length; j++) {
            let row = board[i][j];
            let column = board[j][i];
            // console.log(i,j)
            if (!isNaN(parseInt(row))) {
                if(rowSet.has(row)){
                    return false;
                } else{
                    rowSet.add(row)
                }
            }
            if (!isNaN(parseInt(column))) {
                if(columnSet.has(column)){
                    return false;
                } else{
                    columnSet.add(column)
                }
            }

        }
        // console.log({rowSet})
        // console.log({columnSet})
    }
    let start = 0;
    let bound = 3;

    while(bound<=board.length){
        // const gridSet1 =  new Set();
        // const gridSet2 =  new Set();
    
        for (let index = 0; index < board.length; index+=3) {//colomns
            const gridSet1 =  new Set();
            // console.log(index)
            for (let j = start; j < bound; j++) {//00,10,20 02,12,22 03,13,23
                let element = board[j][index];//0-3,0-3; 0-3,3-6; 0-3,7-9
                let element2 = board[j][index+1];//3-6,0-3; 3-6,3-6; 3-6,7-9
                let element3 = board[j][index+2];//3-6,0-3; 3-6,3-6; 3-6,7-9
                if (!isNaN(parseInt(element))) {
                    if(gridSet1.has(element)){
                       return false;
                    } else{
                        gridSet1.add(element)
                    }
                }
                if (!isNaN(parseInt(element2))) {
                    if(gridSet1.has(element2)){
                       return false;
                    } else{
                        gridSet1.add(element2)
                    }
                }
                if (!isNaN(parseInt(element3))) {
                    if(gridSet1.has(element3)){
                       return false;
                    } else{
                        gridSet1.add(element3)
                    }
                }
                
            }
            console.log({gridSet1})
           
            // console.log({grids})
        }
        start+=3;
        bound+=3;
       
        
    }

 

   
    return true;
};


const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
isValidSudoku(board);