var isIsomorphic = function(s, t) {
    let sset= new Set(s);
    let tset= new Set(t)
    if(sset.size !== tset.size) return false;
    let newWord = ""
    let map ={}
    for(let i=0;i<s.length;i++){
        let letter = s[i];
        let mapping = t[i];
        
        if(!map[letter]){
            map[letter] = mapping;
        }
        let found = map[letter]

        newWord += found;
    }
    console.log(newWord)
    return t===newWord;
};

isIsomorphic("egg","add");