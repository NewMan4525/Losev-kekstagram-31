import { getRandomInteger } from './util.js';
import {
  namesBuffer,
  descriptionBuffer,
  commentsBuffer, } from './data-storge.js';

function commentGenerator() {
  return {
    id: getRandomInteger(1, 70000),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: commentsBuffer[getRandomInteger(0, commentsBuffer.length - 1)],
    name: namesBuffer[getRandomInteger(0, namesBuffer.length - 1)],
  };
}

function objGenerator() {
  const obj = {
    id: getRandomInteger(1, 25),
    url: `photos/${getRandomInteger(1,25)}.jpg`,
    description:descriptionBuffer[getRandomInteger(0,descriptionBuffer.length - 1)],
    likes:getRandomInteger(15,200),
    comments: [],
  };

  for (let i = 0; i < getRandomInteger(0,30); i++) {
    obj.comments.push(commentGenerator());
  }
  return obj;
}

function arrGenerator(itemInteger) {
  const array = [];
  for (let i = 0; i < itemInteger; i++) {
    array.push(objGenerator());
  }
  return array;
}

export { arrGenerator };
