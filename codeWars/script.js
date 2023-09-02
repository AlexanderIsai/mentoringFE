function arrayDiff(a, b){
    return a.filter(item => !b.includes(item))
}

function toJadenCase (string) {
    let words = string.split(" ");
    let wordsJadenCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return wordsJadenCase.join(" ");
}


