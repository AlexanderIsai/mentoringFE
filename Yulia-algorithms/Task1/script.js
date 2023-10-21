let countIt = 0;
let countRec = 0;

function fibo(n) {
    if (n <= 0) {
        return "Попробуйте еще";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        let a = 0, b = 1;
        let result;
        for (let i = 3; i <= n; i++) {
            countIt++;
            result = a + b;
            a = b;
            b = result;
        }

        return result;
    }
}

let number = 10;
console.log(`${number}-е число - ${fibo(number)}`);
countIt = 0;

console.log(fibo(10))
console.log(`count It - ${countIt}`)
countIt = 0;
console.log(fibo(20))
console.log(`count It - ${countIt}`)
countIt = 0;
console.log(fibo(30))
console.log(`count It - ${countIt}`)


function fibonacci(n) {
    countRec++
    if (n <= 0) {
        return "Попробуйте еще";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let num = 10;
console.log(`${num}-е число - ${fibonacci(num)}`);
countRec = 0;
console.log(fibonacci(10))
console.log(`Count rec - ${countRec}`)
countRec = 0;
console.log(fibonacci(20))
console.log(`Count rec - ${countRec}`)
countRec = 0;
console.log(fibonacci(30))
console.log(`Count rec - ${countRec}`)

// Сколько раз была вызвана рекурсия и сколько итераций цикла было произведено. Какой вывод можно сделать?
// Количество итераций - равно n
// Рекурсия - увеличивается в геометрической прогрессии