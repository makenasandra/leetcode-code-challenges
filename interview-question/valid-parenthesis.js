/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
        // console.log(stack.length)

    for(let i=0; i<s.length; i++){
        let bracket = s[i];
        if(Object.values(map).includes(bracket)){
            stack.push(bracket)
        } else{
            console.log(map[bracket] !== stack.pop())
            console.log(bracket)
            if(stack.length===0 || map[bracket] !== stack.pop()){
                return false;
            }
        }
        console.log(stack);
    }
    return stack.length==0;

};

isValid("[")