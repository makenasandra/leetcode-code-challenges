// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
    const magArr = magazine.split("");
    const ransomNoteArr = ransomNote.split("");
    for(let i=0;i<ransomNote.length; i++){
        const word = ransomNote[i];
        const foundInd = magArr.findIndex((w)=> w===word);
        if(foundInd===-1){
            return false;
        } else{
magArr[foundInd] = "_";
        }
    }

    return true;
};

const ransomNote = "aay";
const magazine = "aab";
console.log(canConstruct(ransomNote, magazine))