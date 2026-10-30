function reverseVowels(str){
    let vowels="aeiouAEIOU";
    let arr=str.split("")
    let vowelsArray=[];

     for(let i=0;i<arr.length;i++){
       if(vowels.includes(arr[i])){
         vowelsArray.push(arr[i])
       }
     }
       // console.log(vowelsArray)

  for(let j=0;j<arr.length;j++){
    if(vowels.includes(arr[j])){
      arr[j]=vowelsArray.pop()
    }
  }
  return arr.join("")
}



console.log(reverseVowels("ujjawal"))