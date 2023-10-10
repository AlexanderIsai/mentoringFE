// Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).
// Внизу каждого списка выводится итоговая сумма каждого товара.
//     А так же в самом конце выводится итоговая сумма и количество всех товаров.

let products = [
    {
        title: "BMW",
        price: 40000,
        count: "15",
    },
    {
        title: "Toyota",
        price: 20000,
        count: "13",
    },
    {
        title: "Ford",
        price: 30000,
        count: "20",
    },
    {
        title: "Chevrolet",
        price: 60000,
        count: "9",
    },
    {
        title: "Volkswagen",
        price: 30000,
        count: "13",
    },
];

let productTableBody = document.querySelector('.products tbody');
let totalAmount = document.querySelector('.total');

function printProductsList() {
    let total = 0;
    let totalQuantity = 0;

    products.forEach(product => {
        let row = document.createElement('tr');
        let title = document.createElement('td');
        let price = document.createElement('td');
        let count = document.createElement('td');
        let sum = document.createElement('td');

        title.textContent = product.title;

        price.textContent = product.price;
        count.textContent = product.count;

        let sumTotal = product.price * product.count;
        sum.textContent = sumTotal.toString();

        total += sumTotal;
        totalQuantity += +product.count;

        row.appendChild(title);
        row.appendChild(price);
        row.appendChild(count);
        row.appendChild(sum);

        productTableBody.appendChild(row);
    });

    totalAmount.textContent = `Итого: Общая сумма - ${total} дол., Общее количество товаров - ${totalQuantity} шт.`;
}

printProductsList();