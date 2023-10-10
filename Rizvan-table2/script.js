// Напишите скрипт, который выводит в интерфейс
// следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):

let programmers = [
    {
        fullName: "Bill Gates",
        position : "Founder Microsoft",
        salary: 1000
    },
    {
        fullName: "Steve Jobs",
        position : "Founder Apple",
        salary: 1200
    },
    {
        fullName: "Larry Page",
        position : "Founder Google",
        salary: 1100
    },
    {
        fullName: "Mark Zuckerberg",
        position : "Founder Facebook",
        salary: 1300
    }
]

let titleMain = document.createElement('h1');
let tableProgrammers = document.createElement('table');
let tableTitle = document.createElement('thead');
let rowTitle = document.createElement('tr')
let titleContent = ["No.", "Full Name", "Position", "Salary"];


for (let i = 0; i < titleContent.length; i++) {
    let tempItem = document.createElement('th')
    tempItem.textContent = titleContent[i];
    tableTitle.appendChild(tempItem)

}


programmers.forEach(person => {

})






titleMain.textContent = "Список программистов";




document.body.append(titleMain)
document.body.append(tableProgrammers)
tableProgrammers.appendChild(tableTitle)


let appleEn = document.querySelector('.test')
function hiding(event) {
    console.log(event.target.className)
    if (event.target.className === 'test') {

        appleEn.classList.toggle("test1");
    }
}