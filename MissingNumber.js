// function MissingNumber(arr){
//     let n=arr[arr.length-1]
//     let Total=(n*(n+1))/2; 
//     let actualSum=0;

//     for(item of arr){
//         actualSum=actualSum+item
//     }


//    return Total-actualSum;
// }


// console.log(MissingNumber([1, 2, 3,4, 5,6]))
const MissingNumber=(arr)=>{
    let boolean={}
    for(i=1;i<=arr[arr.length-1];i++){
        if(arr.includes(i)){
            boolean[i]=true;
        }
        else{
            boolean[i]=false;
        }
    }
    for(let key in boolean){
        if(boolean[key]==false){
            return key
        }
    } 
}
console.log(MissingNumber([1, 2,4, 5,6]))
















