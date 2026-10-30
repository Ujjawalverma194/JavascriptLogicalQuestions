function reverse(arr,start,end){
    while(start<=end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
}

function leftRotate(arr,k){
    
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1)
    reverse(arr,0,arr.length-1)
     
    return arr;

}

console.log(leftRotate([1,2,3,4,5],3))