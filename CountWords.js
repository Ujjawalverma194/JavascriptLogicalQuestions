function countWords(sentence){
    let newSentence=sentence.trim()
    // console.log(newSentence)
     let count=1;
    for(let i=0;i<newSentence.length;i++){
        if(newSentence[i]==" " && newSentence[i+1]==" "){
            continue;
        }
        if(newSentence[i]===" "){
            count++;
        }
    }
    return count;
}

console.log(countWords("I       Love     Javascript"))