

localStorage.setItem('name', 'Yuliya')
console.log(localStorage.getItem('ключ'))
localStorage.removeItem('ключ')
localStorage["Ключ"] = "Значение"
console.log(localStorage["Ключ"])

let item2;
let obj = {
    item1: 1,
    item2,
    item3:"hello"
};

console.log(obj)

let serialObj = JSON.stringify(obj); //сериализуем его
console.log(serialObj)

localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"

let returnObj = JSON.parse(localStorage.getItem("myKey"))//спарсим его обратно объект
console.log(returnObj)

// localStorage.clear()