import { getRandomPositiveInteger, getRandomArrayElement, checkStringLength } from './util.js';
import { commentLines, descriptions, names } from './data.js'

const createMessage = () => 
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(commentLines)
  ).join(' ');
  
  // Ф-я формирует объект с данными комментария
  const createComment = (index) => ({
    id: index,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(names),
  });
  
  const createPicture = (index) => ({
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from(
      { length: getRandomPositiveInteger(0, 6) },
      (_, commentIndex) => createComment(commentIndex + 1)
    ),
  });
  
  const getPictures = () =>
    Array.from({ length: 25 }, (_, pictureIndex) =>
      createPicture(pictureIndex + 1)
    );
    
    checkStringLength('', 140);

export { getPictures };