function linearSearch(arr,target){
    let index;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            index=i;
            break;
        }
        else{
            index=-1
        }
    }
    return index
}


console.log(linearSearch([23,56,75,34,56,12,98],7))