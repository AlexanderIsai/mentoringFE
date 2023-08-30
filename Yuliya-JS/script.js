// Consider an array/list of sheep where some sheep may be missing from their place.
//     We need a function that counts the number of sheep present in the array (true means present).

function sheepCount(array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true){
            count++;
        }
    }
    return count;
}
let array = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];
console.log(sheepCount(array))

// Создайте функцию, которая возвращает значение, умноженное
// на 50 и увеличенное на 6. Если введенное значение является строкой, оно должно возвращать «Ошибка».

function increaseNumber(number){
    if (typeof number !== "number"){
        return "Error"
    } else return number * 50 + 6;
}
console.log(increaseNumber(1))

// Создать функцию shortcut для удаления строчных гласных (a, e, i, o, u ) в заданной строке.

function shortcutLetters(string){
    return string.replace(/[aeiou]/g, '');
}
console.log(shortcutLetters("I love Java"))

// Write function bmi that calculates body mass index (bmi = weight / height2).
//     if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function calculateBodyMassIndex(weight, height){
    let bmi = weight /(height * height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else return "Obese"
}

console.log(calculateBodyMassIndex(82, 1.80))

// This code does not execute properly. Try to figure out why.
function multiply(a, b){
    return a * b
}

function boolToWord( bool ){
    if (bool){
        return "Yes"
    } else return "No"
}

// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом, большим 0.

function calculateNumbers(number){
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result += i;
    }
    return result;
}

function arrayPlusArray(arr1, arr2) {

    return arr1.reduce((sum, current) => sum + current, 0) + arr2.reduce((sum, current) => sum + current, 0);
}

// Наша футбольная команда завершила чемпионат.
//
//     Результаты матчей нашей команды записываются в набор строк. Каждый матч представлен строкой
//     в ​​формате "x:y", где x– счет нашей команды, а y– счет соперника.
//
//     Например: ["3:1", "2:2", "0:1", ...]
//
// Очки начисляются за каждый матч следующим образом:
//
//     если x > y: 3 очка (победа)
// если x < y: 0 очков (проигрыш)
// если x = y: 1 очко (ничья)
// Нам нужно написать функцию, которая принимает эту коллекцию и возвращает количество очков,
// которые наша команда ( x) набрала в чемпионате по приведенным выше правилам.
//
//     Примечания:
//
// наша команда всегда играет 10 матчей в чемпионате
// 0 <= х <= 4
// 0 <= у <= 4

function calculatePoints(results) {

    let points = 0;

    for (const result of results) {
        let [ourGoals, vsGoals] = result.split(":");
        if (ourGoals > vsGoals) {
            points += 3;
        } else if (ourGoals === vsGoals) {
            points += 1;
        }
    }
    return points;
}

// Натан любит кататься на велосипеде.
//
//     Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.
//
//     Вам дано время в часах, и вам нужно вернуть количество литров, которое выпьет Натан, округленное до наименьшего значения.

function calculateWater(time){
    return Math.floor(time / 2);

}

console.log(calculateWater(9))