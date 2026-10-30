function SecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = largest;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < largest) {
            SecondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i]>secondLargest && arr[i]!==largest){
            secondLargest=arr[i];
        }
    }
    return secondLargest;
}

console.log(SecondLargest([12,34,56,78,90]))