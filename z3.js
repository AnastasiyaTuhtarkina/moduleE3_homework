function getSumFunction(a) {
    return function(b) {
        return a + b
    }
};

let sumFunction = getSumFunction(parseInt(prompt('Введите первое число: ')));

let sum = sumFunction(parseInt(prompt('Введите второе число: ')));

console.log('Сумма чисел:', sum);
