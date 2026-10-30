
// WITHOUT BUILT IN METHODS 

// function countVowels(str){
// let count=0;
// for(item of str){
//     let char=item.toLowerCase()
//     if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
//         count++;
//     }
// }
// return count;
// }

// console.log(countVowels("Ujjawal"))
// console.log(countVowels("Programming"))



// USING BUILT IN METHODS


function countVowels(str){
    let count=0;
   for(char of str){
    
     if("aeiouAEIOU".includes(char)){
        count++;
    }
   }
    return count;
}


console.log(countVowels("ujjawal"))