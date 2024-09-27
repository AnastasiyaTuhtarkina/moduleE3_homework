function primeNum(num){
    let isPrime = true,
        result;
    
    if (num > 1 && num <= 1000) {    
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                isPrime = false;
        }
        result = isPrime? `${num} - простое число` : `${num} - не простое число`;
        }
    } else if (num < 1 || num > 1000) {
        result = 'Введите число от 1 до 1000';
    }  
    return result;  
}

console.log(primeNum(prompt()))