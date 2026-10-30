function InterSection(arr1,arr2){
    let res=[];
    for(let i=0;i<arr2.length;i++){
       if(arr1.includes(arr2[i])){
        res.push(arr2[i])
       }
    }

    return res;
}

console.log(InterSection([1, 2, 2, 3, 5], [1, 2, 7]))