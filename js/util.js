// Ф-я возвращает случайное число из диапозона
const getRandomPositiveInteger = (a, b) => {

    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

// Ф-я проверяет длинну строки
const checkStringLength = (string, length) => string.length <= length;

// Ф-я возвращает случайный элемент массива
const getRandomArrayElement = (array) => {
    return array[getRandomPositiveInteger(0, array.length - 1)];
};

// Ф-я возвращает нажатие клавиши Esc
const isEscapeKey = (evt) => evt.key === 'Escape';


export {
    getRandomPositiveInteger,
    checkStringLength,
    getRandomArrayElement,
    isEscapeKey,
};