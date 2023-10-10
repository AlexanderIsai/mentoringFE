const div_root = document.querySelector('#root')
const div_container = document.createElement('div')
div_container.className = 'container'
div_root.append(div_container)
// div_container.classList.add('container')

const add_form = document.querySelector('.add_form')
const update_form = document.querySelector('.update_form')

// Обработка данных с формы (добавление нового элемента)
add_form.onsubmit = (e) => {
    e.preventDefault()
    let form_data = new FormData(add_form)
    let data = Object.fromEntries(form_data)
    // аналог автоинкремента для атрибута id нового элемента
    data.id = (users.length !== 0) ? Math.max(...users.map(elem => elem.id)) + 1 : 1
    addUser(data)
    clearInputs()
}

// Обработка данных с формы (изменение карточки)
update_form.onsubmit = (e) => {
    e.preventDefault()
    let form_data = new FormData(update_form)
    let  {id, ...data} = Object.fromEntries(form_data)
    updateUser(+id, data)
    clearInputs()
}

// Исходный массив
let data = [
    {id: 1, name: 'Alex', salary: 2000},
    {id: 2, name: 'John', salary: 4000},
    {id: 3, name: 'Steven', salary: 1000},
    {id: 4, name: 'Neena', salary: 5000},
    {id: 5, name: 'Jimmy', salary: 8000},
    {id: 6, name: 'Georgy', salary: 500},
    {id: 7, name: 'Leon', salary: 999}
]
// Загруженный с LS массив
let users = JSON.parse(localStorage.getItem('users')) ?? data

// Функция, которая строит разметку (карточки) для каждого элемента массива
function render(array){
    for (let elem of array){
        // Создание элементов
        const div_card = document.createElement('div')
        const h2_name = document.createElement('h2')
        const p_salary = document.createElement('p')
        const h5_id = document.createElement('h5')
        const del_button = document.createElement('button')

        // Заполнение классов элементов
        div_card.className = 'card'
        del_button.className = 'del_button'

        // Заполнение текстового сво-ва элементов
        h2_name.innerText = elem.name
        p_salary.innerText = elem.salary
        h5_id.innerText = elem.id
        del_button.innerText = 'X'

        // Вставка элементов
        div_container.append(div_card)
        div_card.append(h2_name, h5_id, p_salary, del_button)

        del_button.onclick = () => deleteUserById(elem.id)
    }
}

// Удаление содержимого container, вызов функции render с новым массивом
function rerender(array){
    localStorage.setItem('users', JSON.stringify(array))
    div_container.innerHTML = ''
    render(array)
}

// Удаление элемента, создание нового массива без удаляемого элемента
function deleteUserById(id){
    console.log(id)
    users = users.filter(elem => elem.id !== id)
    rerender(users)
}

// Добавление нового пользователя
function addUser(obj){
    users.push(obj)
    rerender(users)
}

// Изменение данных пользователей
function updateUser(id, obj){
    let findUser = users.find(elem => elem.id === id)
    console.log(findUser)
    if(findUser){
        findUser.name = obj.name
        findUser.salary = obj.salary
        rerender(users)
    } else {
        alert('ID does not exist')
    }
}

function clearInputs(){
    let inputs = document.querySelectorAll("input")
    inputs.forEach(e => (e.type !== "submit") ? e.value = "" : e.value)

}

// Вызов рендера с постреонием DOM - узлов
render(users)
