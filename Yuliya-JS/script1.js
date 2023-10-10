const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];

const result1 = products.reduce((acc, val) => {
    if (acc[val.category]) {
        acc[val.category] += val.price;
    } else {
        acc[val.category] = val.price;
    }
    return acc;
}, {});

console.log(result1)

products.reduce((accumulator, currentValue) => {
    accumulator[currentValue.category] =
        (accumulator[currentValue.category] || 0) + currentValue.price;
    return accumulator;
}, {})




// let test = [1, 2, 3, 4, 5]


let test2 = [1, 2, 3, 4, 5]

// test.forEach(e => e * 20)

// console.log(test)
//
//
//
// console.log(test === test2)

let h1 = document.createElement('h1')
h1.innerHTML = 'самый главный заголовок'
h1.style.textTransform = 'uppercase'
h1.classList.add('main-color')
let h2 = document.body.querySelectorAll('h2')
console.log(h2)
for (let i = 0; i < h2.length; i++) {
    h2[i].classList.add('main-color')
}


document.body.append(h1)

function test(arr){
    let newArr = arr.map((elem) => elem = (elem < 0) ? Math.abs(elem) : elem)
    return newArr;
}
let arr = [-1, -3, 5, 7, 8];
// console.log(test(arr))

function handler123(arr) {
//     let newArr = arr.map((elem) => elem = (elem < 0) ? Math.abs(elem) : elem)
// }
    let newArr = arr.map(function (elem) {

        if (elem < 0) {
            elem = Math.abs(elem)
            console.log(elem)
        }

        return elem;
    })
    return newArr
}

console.log(handler123(arr))

