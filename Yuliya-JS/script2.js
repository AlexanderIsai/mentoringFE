let buttonShowMW = document.createElement('button');
let containerMW = document.createElement('div');
let formMW = document.createElement('div')
let h2MW = document.createElement('h2')
let buttonClose = document.createElement('span')
// let pTest = document.querySelector('p')
//
// pTest.style.fontSize = "48px";
// // let divTest = document.querySelector('.test1')
// // divTest.style.border = "4px solid black"


buttonShowMW.textContent = "Go to modal window";
buttonShowMW.classList.add('show-mw');
containerMW.classList.add('mw-container');
containerMW.classList.add('hide');
formMW.classList.add('form-mw');
h2MW.textContent = "This is modal window!";
h2MW.classList.add('form-content');
buttonClose.textContent = "X";
buttonClose.classList.add('close')

buttonShowMW.addEventListener('click', (e) => {
    console.log(e.target)
})

// buttonShowMW.addEventListener("click", (e) => {
//     console.log(e.target.className)
//     if(e.target.className === "show-mw"){
//         buttonShowMW.classList.toggle("hide")
//         containerMW.classList.toggle("hide")
//     }
// })
buttonClose.addEventListener("click", (e) => {
    if(e.target.className === "close"){
        buttonShowMW.classList.toggle("hide")
        containerMW.classList.toggle("hide")
    }
})

formMW.appendChild(h2MW)
containerMW.appendChild(formMW)
containerMW.appendChild(buttonClose)
document.body.append(buttonShowMW)
document.body.append(containerMW)