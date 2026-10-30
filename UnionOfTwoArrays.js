function Union(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(!arr1.includes(arr2[j])){
                arr1.push(arr2[j])
            }
        }
    }
    return arr1;
}


console.log(Union([1, 2, 3, 4, 5], [1, 2,4,5,6, 7]))