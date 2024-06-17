const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
];
  
const descriptions = [
  'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
  'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
  'Затусили с друзьями на море #laptevsea #north #northeastpassage',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  'Отдыхаем... #chill #relax #group #photo',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка! #wow #car #carwow #drive',
  '#fun #party #cool #young',
  'Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр',
  'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка',
  'Норм',
];
  
  const names = ['Николай', 'Аким', 'Ким', 'Харитон', 'Тимур', 'Степан'];


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

const createPhoto = () => {
    return {
        id: '',
        url: '',
        likes: '',
        comments: '',
    }
};

// Ф-я создает массив ис сгенерированных объектов
// Метод from создаст массив длинной 25 элементов
// Все элементы будут созданы ф-й билдером
const similarPhoto = Array.from({length: 25}, createPhoto);