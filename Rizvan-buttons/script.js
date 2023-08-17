let buttonForRed = document.querySelector('.square-red');
let buttonForPink = document.querySelector('.square-pink');
let buttonForGreen = document.querySelector('.square-green');
let squareRed = document.querySelector('.red');
let squarePink = document.querySelector('.pink');
let squareGreen = document.querySelector('.green');
let divRoot = document.querySelectorAll('.root');

function changeColor(event){
    if (event.target.className === "square-red"){
        squareRed.style.background = "green";
        squareRed.style.width = 100+"px";
    } else if (event.target.className === "square-pink"){
        squarePink.style.background = "blue";
        console.log(squarePink.style.background)
    } else if (event.target.className === "square-green"){
        squareGreen.style.width = squareGreen.offsetWidth + 20 + "px";
    }
}

function showParagraphs(event){
    if(event.target.className === "first-p"){
        divRoot[0].style.display = "block";
    } else if (event.target.className === "second-p"){
        divRoot[1].style.display = "block";
    }
}