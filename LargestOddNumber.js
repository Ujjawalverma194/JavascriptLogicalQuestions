// function largestOddNumber(str){
//     let maxOdd=0;
//     let newArray=[];
//     for(let i=0;i<str.length;i++){
//         newArray.push(Number(str.slice(i)))
    
//     }
     
//     for(let j=0;j<newArray.length;j++){
//         if(newArray[j]>maxOdd && newArray[j]%2!==0){
//             maxOdd=newArray[j];
//         }
//     }

//     return newArray
// }


// console.log(largestOddNumber("214638"))



function largestOddNumber(str){
    let maxOdd=0;
    let newArray=[];
    let num=Number(str)
    res=[]
    
    while(num>0){
        newArray.push(num)
       num=Math.floor(num/10);
    }
    console.log(newArray)
    for(let item of newArray){
        if(item%2!==0){
            res.push(item)
        }
    }


    let finalvalue=Math.max(res)
    return  finalvalue

    
}


console.log(largestOddNumber("214638"))