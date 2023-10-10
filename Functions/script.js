




function showMessage() {
    alert( 'Всем привет!' );
    let h1 = document.createElement('h1')
    h1.textContent = "Hallo alle zusammen!"
    document.body.append(h1)
}


let test  = function showMessage() {
    alert( 'Всем привет!' );
    let h1 = document.createElement('h1')
    h1.textContent = "Hallo alle zusammen!"
    document.body.append(h1)
    h1.addEventListener("click", printMessage)
}

test();
const sum = (a, b) => a + b;

console.log(sum(10, 13));

const multi = (a, b, c) => {
    let y = a - b;
    b = b * c;
    c = b + a;
    return y;
}

console.log(multi(5, 3, 2))

function changeValue (a, b){
    let c = a
    a = b;
    b = c;
}

changeValue(5, 7)

function printMessage(){
    console.log("Alles ist in Ordnung")
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];

array.forEach(function (el) {
    printOddNumbers(el)
    }
//     (e) => {
//     // if(e % 2 === 0){
//     //     console.log(e)
//     // }
// }
)

function printOddNumbers(element){
    if(element % 2 === 0){
        console.log(element)
    }
}


