const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


function getQuantityOfVoters(voters){
    return voters.reduce((acc, currentVoter) => {
        if (currentVoter.voted) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
}


console.log(getQuantityOfVoters(voters));

//=============Task 2

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function getSum(array){
    let sum = 0;
    array.forEach(e => {
        sum += e.price
    })
    return sum;
}

console.log(getSum(wishlist))

// ================= Task 3
const people = [
    {
        name: "Alex",
        age: 40,
    },
    {
        name: "Nika",
        age: 14,
    },
    {
        name: "Vitalii",
        age: 42,
    },
    {
        name: "Zlata",
        age: 3,
    },
    {
        name: "Katya",
        age: 33,
    },
    {
        name: "Eva",
        age: 13,
    },
    {
        name: "Nastya",
        age: 30,
    },
    {
        name: "Olya",
        age: 36,
    },
    {
        name: "Stepan",
        age: 12,
    },
]

function getQuantityPeople(array){
    let adult = array.filter(e => e.age > 18)
    console.log(`Adult = ${adult.length}, young - ${array.length - adult.length}`)
}
getQuantityPeople(people)

function getAdultPeople(array){
    return array.filter(e => e.age > 30)
}

let more30 = getAdultPeople(people)
console.log(more30)