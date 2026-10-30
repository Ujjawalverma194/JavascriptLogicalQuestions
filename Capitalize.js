function Capitalize(sentence){
    let arr=sentence.split(" ")
    console.log(arr)
    let newArray=[];
    
   for(item of arr){
       let newStr=item.slice(0,1).toUpperCase()+item.slice(1)
       newArray.push(newStr);
       
   }
   return newArray.join(" ")
}
console.log(Capitalize("learn          javascript  every day"))

// function Capitalize(string) {
//     let arr=string.split("");
//     // console.log(arr)
//    let  newArray=[]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==" "){
//             newArray.push(arr[i+1].toUpperCase())
//             continue;
            
//         }
//         else{
//             newArray.push(arr[i])
//         }
//     }

//     return newArray.join("")
// }


// console.log(Capitalize("learn javascript every day"))