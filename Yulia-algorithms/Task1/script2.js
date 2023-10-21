// Напишите функцию getTodos(username), которая в качестве аргумента принимает
// никнейм пользователя (/users) и выводит список его задач (/todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя

let requestUsers = 'https://jsonplaceholder.typicode.com/users';
let requestTodos = 'https://jsonplaceholder.typicode.com/todos';
let requestPosts = 'https://jsonplaceholder.typicode.com/posts';
let requestComments = 'https://jsonplaceholder.typicode.com/comments';
let requestPhotos = 'https://jsonplaceholder.typicode.com/photos';


async function getTodos(username) {
    let dataUsers = await fetch(requestUsers);
    let users = await dataUsers.json();
    let userId;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === username) {
            userId = users[i].id
        }
    }
    let dataTodos = await fetch(requestTodos);
    let todos = await dataTodos.json();
    let userTodos = [];
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].userId === userId) {
            userTodos.push(todos[i])
        }
    }
    return userTodos;
}

getTodos("Ervin Howell").then(r => console.log(r))

// Напишите функцию getСomments(title), которая в качестве аргумента
// принимает заголовок поста (/posts) и выводит список всех его комментариев (/comments).
// В качестве ответа в консоль выведите массив с комментариями. Если у
// заданного поста комментариев нет, выведите в консоль соответствующее сообщение.

async function getComments(title) {
    let dataPosts = await fetch(requestPosts)
    let posts = await dataPosts.json()
    let postId;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title === title) {
            postId = posts[i].id
        }
    }
    let dataComments = await fetch(requestComments);
    let comments = await dataComments.json();
    let postComments = [];
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].postId === postId) {
            postComments.push(comments[i])
        }
    }
    if (postComments.length === 0) {
        return "You don't have any comments"
    } else return postComments;
}

getComments("qui est esse").then(r => console.log(r))

// Напишите функцию getPhotoByNickName(username), которая в качестве аргумента
// принимает никнейм пользователя (/users) и выводит все его фотографии (/photos).
// В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя.

async function getPhotoByNickName(username) {
    let dataUsers = await fetch(requestUsers);
    let users = await dataUsers.json();
    let albumId;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === username) {
            albumId = users[i].id
        }
    }
    let dataPhotos = await fetch(requestPhotos);
    let photos = await dataPhotos.json();
    let userPhotos = [];
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].albumId === albumId) {
            userPhotos.push(photos[i])
        }
    }
    return userPhotos;
}

getPhotoByNickName("Ervin Howell").then(r => console.log(r))