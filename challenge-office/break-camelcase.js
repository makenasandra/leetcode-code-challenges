/**
 * Complete the solution so that the function will break up camel casing, using a space between words.
 * @param {*} string 
 * @returns 
 * 
 */
function solution(string) {
    const found = string.match(/[A-Z]/g, (str)=>{
        console.log(str)
    })
  //   string = found.map(letter =>{
  //       string = string.replace(letter, ` ${letter}`)
  //       return string
  //   })
    // console.log(found)
  //   console.log(string.indexOf("c"))
   
    return "found";
  }

solution("camelCasing")