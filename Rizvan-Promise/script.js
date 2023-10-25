// 1)Создайте функцию delayedTask, которая возвращает промис.
//     Функция delayedTask должна принимать два аргумента: taskName (название задачи) и delay (задержка в миллисекундах).
// Внутри функции, используйте setTimeout для задержки выполнения задачи на указанное количество миллисекунд.
//     После задержки, функция должна разрешить промис с сообщением, содержащим название задачи и время выполнения.

function delayedTask(taskName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = `задача "${taskName}" выполнена в ${new Date().toLocaleTimeString()}`;
            resolve(message);
        }, delay);
    });
}


delayedTask("Delayed Task", 8000)
    .then(message => {
        console.log(message);
    });

console.log(new Date().toLocaleTimeString())

// 2) Задача: Создайте функцию, которая проверяет, является ли заданное число четным, и возвращает Promise с результатом проверки.
//     Если переданное значение не является числом, Promise будет отклонен с сообщением об ошибке.

function isEven(number){
    return new Promise((resolve, reject) => {
        if (number % 2 === 0){
            resolve('Number is even')
        } else reject(new Error('Number is odd'))
    })
}

isEven(Math.round(Math.random() * 10)).then(r => console.log(r))