const id = [];

const names = [
  'Иван',
  'Артем',
  'Тарас',
  'Андрей',
  'Антей',
  'Жульвей',
  'Гоморей',
  'Джуан',
  'Пролетей',
  'Алексей',
  'Евган',
  'Валера',
  'Лерон',
  'Верон',
  'Патроин',
  'Реин',
  'Роман',
  'Навиноз',
  'Никита',
  'Май',
  'Джони',
  'Куан',
  'Кузя',
  'Грэй',
  'Гой',
];

const url = [];
const likes = [];
for (let i = 1; i <= 25; i++) {
  url.push(i);
  id.push(i);
}

for (let i = 15; i <= 200; i++) {
  likes.push(i);
}

const description = [
  'Тут я отдыхаю',
  'Здесь я работаю',
  'Очень красиво',
  'Ух как классно',
  'Смотрюсь тут очень классно',
  'Поставьте лайк и подпишитесь на меня',
  'Хочу лайки-лайки',
];


const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const avatar  = [1,2,3,4,5,6];

const comments = [
  'Фууу. треш полный',
  'Норм фотка',
  'Страшно, но круто',
  'Крутяк',
  'Ты тут хорошо выглядишь',
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};


const createInfoPost = () => {
  return {
    id: getRandomArrayElement(id),
    url: 'photos/' + getRandomArrayElement(url) + '.jpg',
    description: getRandomArrayElement(description),
    likes: getRandomArrayElement(likes),
    comments:
      {
        id: getRandomArrayElement(id),
        avatar: 'img/avatar-' + getRandomArrayElement(avatar) + '.svg',
        message: getRandomArrayElement(message),
        name: getRandomArrayElement(names),
      },
  };
};

const similarPosts = Array.from({length: 25}, createInfoPost);

console.log(similarPosts);