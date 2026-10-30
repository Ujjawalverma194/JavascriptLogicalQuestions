function checkPrime(num){
    if(num==1 || num==2){
        return true;
    }
    for(i=2;i<=num;i++){
        if(num%i===0){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(checkPrime(6))


