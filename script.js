// let a=10;

// function Print(){
//     a=20;
//    {
//      console.log(a)
//    }
// }
// Print()
// console.log("Outside function:",a)




// setTimeout(()=>{
//   console.log("A");
//   Promise.resolve().then(()=>{
//     console.log("B")
//   })
// },5000)


// let arr=[1,2,5,7,9];

// let isEven=arr.every((item)=>{
//    return item%2!==0
// })


// console.log(isEven)


// let str="abcdsefghij"

// let arr=str.split("d");

// console.log(arr)



// let arr=[1,0,4,0,5,2,0,7,0]
// let newArr=[]
// for(let item of arr){
//   if(item!==0){
//     newArr.push(item);
//   }
// }
// for(let item of arr){
//   if(item===0){
//     newArr.push(item)
//   }
// }

// console.log(newArr)

// 1. Given [10, 20, 30, 40, 50], print every element along with its index.

// 2. Convert [1, 2, 3, 4, 5] into [1, 4, 9, 16, 25].

// 3. From [11, 22, 33, 44, 55, 66], create a new array containing only even numbers.

// 4. Find the sum of all elements in [10, 20, 30, 40, 50].

// 5. Find the first number greater than 50 in [10, 25, 60, 80, 90].

// 6. Find the position of the first number divisible by 7 in [10, 14, 21, 28, 35].

// 7. Check whether at least one number is negative in [10, 20, -5, 30].

// 8. Check whether every number in [12, 18, 24, 30] is divisible by 6

// 9. Check whether "JavaScript" exists in ["HTML", "CSS", "JavaScript", "React"].

// 10. Find the largest number in [45, 12, 89, 34, 67].

// 11. Find the position of "Rahul" in ["Amit", "Priya", "Rahul", "Neha"].

// 12. Given [100, 200, 300], create a new array where 10 is added to every element.

// 13. Find the first user whose age is at least 18.
// const users = [
//   { name: "Amit", age: 16 },
//   { name: "Rahul", age: 21 },
//   { name: "Priya", age: 19 }
// ];


// 14. Check whether every student has scored at least 35.
// const marks = [45, 67, 32, 89, 56];


// 15. Check whether the number 100 exists in [10, 20, 30, 40, 50].

// 16. Sort [45, 12, 89, 3, 27] in ascending numerical order.

// 17. Convert [1, [2, 3], [4, 5]] into a single-level array.

// 18. Convert [1, 2, 3] into [1, 1, 2, 2, 3, 3].

// 19. Extract the middle three elements from [10, 20, 30, 40, 50].

// 20. Remove the second and third elements from [1, 2, 3, 4, 5].

// 21. Combine [1, 2, 3] and [4, 5, 6] into one array.

// 22. Get the last element of [10, 20, 30, 40] using a negative index.

// 23. Convert ["JavaScript", "is", "fun"] into the string "JavaScript is fun".

// 24. Reverse [1, 2, 3, 4, 5] to get [5, 4, 3, 2, 1].



// function CalculateSeat(arr){
//     //   let res=[]
//     let index=0;
//     for(let i=0;i<arr.length;i++){
//         let count=0;
//         for(let j=0;j<arr[i].length;j++){
//             // console.log(arr[i][j])

//             if(arr[i][j]===1){
//                 count++;
//             }
//         }
//         arr[index]=count
//         index++;
//     }
// return arr;
// }

// let arr=[[1,1,1],[0,0,1,1],[0,0,1]]

// console.log(CalculateSeat(arr))



// let arr=[10,20,30,40,60,70];


// for (let key in arr){
//     console.log(`index:${key}, ${arr[key]}`)
// }





// let arrr=[1,2,3,4,5,6];


// let squares=arrr.map((item)=>{
//     return item*item
// })

// console.log(squares)


let arr=[11,22,33,44,55,66,77];


let Evens =arr.filter((item)=>(
    item%2===0
))


console.log(Evens)



