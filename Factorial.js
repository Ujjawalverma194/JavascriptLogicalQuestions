
//METHOD 1

// function factorial (num){
//     let fact=1;
//     for(i=1;i<=num;i++){
//         fact=fact*i;
//     }
//     return fact;
// }



// console.log(factorial(6))


// METHOD 2

function factorial(num){
    if(num==1 || num==0){
        return 1;
    }
    else{
        return num *factorial(num-1)
    }
}



console.log(factorial(6))