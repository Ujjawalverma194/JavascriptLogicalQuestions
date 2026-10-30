function RotateRight(arr, k) {
    let newArr = []
    let count = 0;
    for (let i = 0; i <= arr.length - 1 - k; i++) {
        newArr[i + k] = arr[i]
    }

    for (let j = arr.length - k; j < arr.length; j++) {
        newArr[count] = arr[j];
        count++
    }
    return newArr;
}

// RotateRight([1,2,3,4,5,6],2)
console.log(RotateRight([21, 34, 56, 87, 98, 23, 45, 54], 2))
