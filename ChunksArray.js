function ChunksArray(arr, n) {
    let res = []
    for (let i = 0; i < arr.length; i += n) {
        res.push(arr.slice(i, i + n))
    }
    return res
}

console.log(ChunksArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))