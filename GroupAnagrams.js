// function countFrequency(str){
//     let freq={}
//     for (let char of str) {
//     if(freq[char]){
//         freq[char]++;
//     }
//     else{
//         freq[char]=1;
//     }
//   }
//   return freq;
// }

// function groupAnagrams(StringsArray){
//     let frequencies=[]
//     for(let char of StringsArray){
//      frequencies.push(countFrequency(char))
//     }
//     return frequencies
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))



// function calculateAsciiValue(str){
//     let total=0;
//     let ascii={}
//         for(let k=0;k<str.length;k++){
//             total=total+str[k].charCodeAt()
//             ascii[str]=total
//         }
//         return ascii
        
// }




function groupAnagrams(arr){
    let newArray=[]
    for(let i=0;i<arr.length;i++){
   
       let total=0;
        let ascii={}
        for(let k=0;k<arr[i].length;k++){
            total=total+arr[i][k].charCodeAt()
            ascii[arr[i]]=total
        }
         
        for(key in ascii){
            // console.log(key,":",ascii[key])   
        }
        
    }
    
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))