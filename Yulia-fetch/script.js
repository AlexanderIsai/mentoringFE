// Переменные
let url = "https://dummyjson.com/products";
let root = document.createElement('section');



// Стили
root.classList.add("grid-container")



// Функции

function getData2(url){
    fetch(url, {
        method: 'GET'
    }).then(res =>{
        return res.json()
    }).then(prod => {
        renderAll(prod.products)
        return prod.result
    })
}
getData2(url)

function renderAll(data){

        data.forEach(e => {
            render(e)
        })
}

function render(element){
        let product = document.createElement('div');
        product.classList.add("item")
        let productImage = document.createElement('img')
        productImage.src = "img/telephone.jpg";
        product.appendChild(productImage)
        let productTitle = document.createElement('h4')
        productTitle.innerText = `Title: ${element.title}`
        let productPrice = document.createElement('p')
        productPrice.innerText = ` Price: ${element.price}`
        product.appendChild(productTitle)
        product.appendChild(productPrice)
        product.appendChild(rating(element))
        root.appendChild(product)
}

function rating(e){
    e.rating = (e.rating - Math.floor(e.rating) < 0.5) ? Math.floor(e.rating) : Math.ceil(e.rating)
    let stars = document.createElement('div')

    console.log(e.rating)

    for (let i = 0; i < 5; i++) {
        let star = document.createElement('span')
        if(i < e.rating){
            star.classList.add("active")
        }
        star.classList.add("fa")
        star.classList.add("fa-star")

        stars.appendChild(star)
    }
    return stars;
}

document.body.append(root)