// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца.
//     Примечание: инициализация дат должна быть внутри функции

function checkDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();

    let firstDayOfNextMonth = new Date(year, month + 1, 1);

    let lastDayOfCurrentMonth = new Date(firstDayOfNextMonth - 1);
    let lastDay = lastDayOfCurrentMonth.getDate();

    let result = lastDay - today.getDate();

    console.log(`До конца месяца осталось ${result} дней.`);
}

checkDate();

// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
//     Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
//     Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.
//
//     Предусмотрите вывод 4 пункта (дня, дней)

function isItFridayToday() {
    let today = new Date();
    let dayOfWeek = today.getDay();
    if (dayOfWeek === 5) {
        console.log("Сегодня пятница!");
    } else if (dayOfWeek === 6) {
        console.log("Пятница была вчера");
    } else if (dayOfWeek === 4) {
        console.log("Завтра пятница!");
    } else {
        let daysToFriday = 5 - dayOfWeek;
        let text = "дней";
        if (daysToFriday === 1) {
            text = "день";
        } else if (daysToFriday >= 2 && daysToFriday <= 4) {
            text = "дня";
        }
        console.log(`Пятница будет через ${daysToFriday} ${text}.`);
    }
}

isItFridayToday();

// Задан массив prices, передающий элементы строкового типа. Напишите
// функцию getInfo(prices), которая получает массив и возвращает количество
// элементов, которые начинаются на “Цена” и количество элементов, которые
// заканчиваются на “$” в виде массива по примеру:
//
//     Пример:
// console.log(getInfo(prices))
//
// Результат: [3,3]
let prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
]

let startSearch = "Цена";
let endSearch = "$";

function getInfo(arrString) {
    let countStartSearch = 0;
    let countEndSearch = 0;
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i].startsWith(startSearch)) {
            console.log(123)
            countStartSearch++;
        }
        if (arrString[i].endsWith(endSearch)) {
            countEndSearch++;
        }
    }
    return [countStartSearch, countEndSearch];
}

console.log(getInfo(prices))

// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру:
let arrays = [
    '89840959944 exampleonemain@mail.ru',
    '+79840959933 forreason@yandex.net',
    'somemail@mail.ru',
    '89840959900 example@gmil.ru',
    '+79840959911',
    'grandthere@mail.ru',
    'jetpackfor@gmail.ru',
    '89840959922 some@yandex.com',
]

//
// Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922']
//     ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru',
//     'grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']

function createArrays(arrString) {
    let phones = [];
    let emails = [];
    for (let i = 0; i < arrString.length; i++) {
        let tempArr = arrString[i].split(" ");
        for (let j = 0; j < tempArr.length; j++) {
            if (tempArr[j].includes("@")) {
                emails.push(tempArr[j])
            } else phones.push(tempArr[j])
        }
    }
    console.log(phones);
    console.log(emails);
}

createArrays(arrays)

// Задан массив cards, передающий элементы строкового типа.
//     Необходимо зашифровать номера карт по следующему правилу:
//     заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.
//
//     Пример:
// Результат: [
// //     '4000*****9499',
// //     '4000*****7379',
// //     '4000*****9869',
// //     '4000*****7859',
// //     '4000*****6899',
// //     '4000*****4699'
// // ]

let cards = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699'
]

function hideNumberOfCard(arrString) {
    let hidingNumbers = arrString;
    for (let i = 0; i < hidingNumbers.length; i++) {
        hidingNumbers[i] = hidingNumbers[i].slice(0, 4) + "*****" + hidingNumbers[i].slice(hidingNumbers[i].length - 4)
    }
    console.log(hidingNumbers)
}

hideNumberOfCard(cards)

