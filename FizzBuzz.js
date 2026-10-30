function fizzBuzz(num){
      let newArr=[];
      for(let i=1;i<=num;i++){
        if(i%3==0 && i%5===0){
            newArr[i]="fizzBuzz"
        }
        else if(i%3==0){
            newArr[i]="Fizz"
        }
        else if(i%5==0){
            newArr[i]="Buzz"
        }
        else{
            newArr[i]=i;
        }
      } 

      return newArr;
}


console.log(fizzBuzz(15))