function showPrimes(limits) {
    for(let number = 2; number <= limits; number++)
    if(isPrime(number)) console.log(number);
}