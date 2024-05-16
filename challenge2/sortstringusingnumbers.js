function order(words){
    // ...
    if(words.length == 0) return "";

    words = words.split(" ")
    // console.log(words)
    let sortedWords = [];
    let i = 0;
    let number = "1";
    while(number <= words.length){
      if(words[i].includes(number)){
        // console.log(words[i] + " index: " + i)
        sortedWords.push(words[i]);
        // console.log(sortedWords)
        number = (Number(number) + 1).toString();
        i = 0;
        // console.log(number)
      } else{
        i++;
      }
    }
    return sortedWords.join(" ");
}

let string = "4of Fo1r pe6ople g3ood th5e the2";

console.log(order(string))

