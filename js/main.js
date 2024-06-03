let getRandomPositiveInteger = (a, b = 1) => {
    if (a === undefined) {
        throw new Error('Первый параметр должен быть числом');
    }

    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
}

let checkStringLength = (string, length) => {
    return string.length <= length;
  }

console.log(getRandomPositiveInteger(-1,5));
console.log(checkStringLength('',5));