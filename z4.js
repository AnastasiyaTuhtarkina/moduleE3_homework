function logNumbers(start, end) {
    let i = start;
    
    let timer = setInterval(function() {
        console.log(i);
        if (i == end) clearInterval(timer);
        i++;
    }, 10);    
}

logNumbers(prompt('Введите первое число'), prompt('Введите второе число'));