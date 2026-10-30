function checkSorting(arr){
  
    let isSorted=true;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            isSorted=true;
        }
        else{
            isSorted=false;
            break;
        }
      
    }
    return isSorted;
}



console.log(checkSorting([1,2,4,3,5,6,7]))