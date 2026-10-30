function FlattenArray(arr){
    let result=[];
    
    for(let i=0;i<arr.length;i++){
    
        if(Array.isArray(arr[i])){
           result= result.concat(FlattenArray(arr[i]))
        }
        else{
            result.push(arr[i]);
        }
    }
    return result
}

console.log(FlattenArray([1, [2, [3, [4, 5]]],6]))





// function FlattenArray(arr){
//     let FlattedArray=arr.flat(Infinity);
//     return FlattedArray;
// }

// console.log(FlattenArray([1, [2, [3, [4, 5]]], 6]))