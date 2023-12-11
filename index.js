export const concatStrings = (a , b) => a + b;

export const isString = (value) => typeof value === 'string';

export const identifySign = (num) => {
    if (num === 0) {
        return 'Ноль';
    } if (num > 0) {
        return 'Положительное число'
    } if (num < 0) {
        return 'Отрицательное число'
    }
}

export const reverseWords = (text) => text.split(' ').reverse().join(' ');

export const wordsCount =(text) => {
    return text.split(' ').length;
}