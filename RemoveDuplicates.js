function removeDuplicates(arr){
    let result=[]
     for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
     }

    for(let k=0;k<arr.length;k++){
        if(!(arr[k]==arr[k+1])){
        result.push(arr[k]);
        }
    }
    return result
}

console.log(removeDuplicates([1,2,3,4,5,5,2,3,8]))





// function removeDuplicates(arr){
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         if(!res.includes(arr[i])){
//             res.push(arr[i]);
//         }
//     }

//     return res;

// }


// console.log(removeDuplicates([1,2,3,4,5,5,2,3,8]))