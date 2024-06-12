function isPrime(number){
    if(number <= 1){
        return false
    }
    for (let i=2;i<=Math.sqrt(number);i++){
        if(number % 2 === 0){
            return false
        }

    }
    return true
}

console.log(isPrime(17))