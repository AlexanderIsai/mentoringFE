
let divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
    divs[i].textContent = divs[i].className.substring(1)
}