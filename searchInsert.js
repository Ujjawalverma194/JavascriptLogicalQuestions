function searchInsert(arr,target){
     for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
        else{
           if(arr[i]<target ){
            arr[i+1]=target;
           }
           return arr;
        }
     }
}

console.log(searchInsert([1,3,4,6,7],2))
