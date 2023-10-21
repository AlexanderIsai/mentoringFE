// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент,
//     который будет находиться на k-й позиции в конечном отсортированном массиве.
//
//     Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 6
// Вывод : 256
//
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 6-й элемент этого массива равен 256.
//
// нельзя использовать метод  shift(), slice() и другие.
//     использование push() и length допустимо

let array1 = [100, 112, 256, 349, 770]
let array2 = [72, 86, 113, 119, 265, 445, 895]

console.log(array2.sort((a, b) => a - b))

function findWithConcat(arr1, arr2, index){
    return array1.concat(array2).sort((a, b) => a - b)[index]
}

console.log(findWithConcat(array1, array2, 6))
console.log(findWithoutConcat(array1, array2, 6))

function findWithoutConcat(arr1, arr2, index){
    let i = 0;
    let j = 0;
    let count = -1;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] <= arr2[j]) {
            count++;
            if (index === count) {
                return arr1[i];
            }
            i++;
        }
        else {
            count++;
            if (index === count) {
                return arr2[j];
            }
            j++;
        }
    }
    while (i < arr1.length){
        count++;
        if (count === index){
            return arr1[i];
        }
        i++;
    }
    while (j < arr2.length){
        count++;
        if (count === index){
            return arr2[j];
        }
        j++;
    }
    return -1;
}
