function arrayDiff(a, b) {
    if(a.length==0 || b.length==0)return a;
    let i =0;
    while(i,b.length){
      // console.log(b[i])
      if(a.includes(b[i])==true){
        // console.log(a.includes(b[i]))
        a.splice(a.indexOf(b[i]), 1);
        // console.log(a)
      } else{
        i++;
      }

      if(i==b.length) return a;
    }
    
  }

console.log(arrayDiff([1,2,3], [1,2]))

//solution
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
