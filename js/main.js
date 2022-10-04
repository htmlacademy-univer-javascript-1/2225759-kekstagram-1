function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
    // Взято с сайта (https://myrusakov.ru/js-random-numbers.html)
}
function lenghtOfComment (string = '', maxLenght = 100) {
    if (string.length <= maxLenght){
        return true;
    }
    return false;
}
