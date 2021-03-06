'use strict';

const API_PREFIX = `/api`;
const DEFAULT_COMMAND = `--help`;
const DEFAULT_PORT = 3000;
const DEFAULT_FRONT_PORT = 8080;
const USER_ARGV_INDEX = 2;

const ExitCode = {
  error: 1,
  success: 0,
};

const HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const Env = {
  DEVELOPMENT: `development`,
  PRODUCTION: `production`,
};

const PUBLIC_DIR = `public`;
const UPLOAD_DIR = `upload`;

const path = require(`path`);
const ANNOUNCE_LENGTH = 5;
const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const FILE_PATH = path.join(__dirname, `../${FILE_NAME}`);
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const FILE_COMMENTS_PATH = `./data/comments.txt`;
const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const MAX_COUNT = 1000;
const MAX_COMMENTS = 4;
const MAX_CATEGORIES = 4;
const MAX_COMMENTS_SENTENCES = 4;
const MAX_ID_LENGTH = 6;
const MONTH_RANGE = 3;

const mockData = [
  {
    "id": `e4S2LO`,
    "title": `Борьба с прокрастинацией`,
    "announce": `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Как начать действовать? Для начала просто соберитесь. Собрать камни бесконечности легко, если вы прирожденный герой. Достичь успеха помогут ежедневные повторения.`,
    "fullText": `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Это один из лучших рок-музыкантов. Золотое сечение — соотношение двух величин, гармоническая пропорция. Как начать действовать? Для начала просто соберитесь. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Первая большая ёлка была установлена только в 1938 году. Достичь успеха помогут ежедневные повторения. Ёлки — это не просто красивое дерево. Это прочная древесина. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Он написал больше 30 хитов. Собрать камни бесконечности легко, если вы прирожденный герой. Программировать не настолько сложно, как об этом говорят. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Простые ежедневные упражнения помогут достичь успеха. Из под его пера вышло 8 платиновых альбомов. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры.`,
    "createdDate": `2021-11-01 20:05:27`,
    "category": [
      `Программирование`
    ],
    "comments": [
      {
        "id": `DNs9cY`,
        "text": `Совсем немного... Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      },
      {
        "id": `deaHtU`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Согласен с автором! Планируете записать видосик на эту тему?`
      }
    ]
  },
  {
    "id": `etX-rr`,
    "title": `Самый лучший музыкальный альбом этого года`,
    "announce": `Достичь успеха помогут ежедневные повторения. Программировать не настолько сложно, как об этом говорят. Первая большая ёлка была установлена только в 1938 году. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
    "fullText": `Программировать не настолько сложно, как об этом говорят. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Из под его пера вышло 8 платиновых альбомов. Ёлки — это не просто красивое дерево. Это прочная древесина. Он написал больше 30 хитов. Золотое сечение — соотношение двух величин, гармоническая пропорция. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Первая большая ёлка была установлена только в 1938 году. Собрать камни бесконечности легко, если вы прирожденный герой. Простые ежедневные упражнения помогут достичь успеха. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
    "createdDate": `2021-12-07 06:17:54`,
    "category": [
      `IT`,
      `Кино`,
      `Деревья`,
      `Музыка`,
      `Разное`
    ],
    "comments": [
      {
        "id": `cSmbsg`,
        "text": `Это где ж такие красоты? Мне кажется или я уже читал это где-то?`
      },
      {
        "id": `orlP76`,
        "text": `Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Совсем немного...`
      }
    ]
  },
  {
    "id": `3sfRkn`,
    "title": `Рок — это протест`,
    "announce": `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Собрать камни бесконечности легко, если вы прирожденный герой. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Первая большая ёлка была установлена только в 1938 году.`,
    "fullText": `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Он написал больше 30 хитов. Ёлки — это не просто красивое дерево. Это прочная древесина. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Достичь успеха помогут ежедневные повторения. Первая большая ёлка была установлена только в 1938 году. Как начать действовать? Для начала просто соберитесь.`,
    "createdDate": `2021-12-23 08:54:20`,
    "category": [
      `Без рамки`,
      `Деревья`,
      `IT`,
      `За жизнь`,
      `Кино`,
      `Программирование`,
      `Разное`,
      `Музыка`
    ],
    "comments": [
      {
        "id": `-5BeyL`,
        "text": `Это где ж такие красоты?`
      },
      {
        "id": `WlxwDK`,
        "text": `Планируете записать видосик на эту тему? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Согласен с автором! Плюсую, но слишком много буквы!`
      },
      {
        "id": `He2az_`,
        "text": `Это где ж такие красоты? Плюсую, но слишком много буквы!`
      }
    ]
  },
  {
    "id": `LyXivD`,
    "title": `Рок — это протест`,
    "announce": `Простые ежедневные упражнения помогут достичь успеха. Ёлки — это не просто красивое дерево. Это прочная древесина. Достичь успеха помогут ежедневные повторения. Собрать камни бесконечности легко, если вы прирожденный герой.`,
    "fullText": `Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Как начать действовать? Для начала просто соберитесь. Достичь успеха помогут ежедневные повторения. Простые ежедневные упражнения помогут достичь успеха. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Ёлки — это не просто красивое дерево. Это прочная древесина. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
    "createdDate": `2021-12-14 09:45:38`,
    "category": [
      `Музыка`,
      `За жизнь`
    ],
    "comments": [
      {
        "id": `BeONXa`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      },
      {
        "id": `__7URY`,
        "text": `Это где ж такие красоты?`
      },
      {
        "id": `pYb_k9`,
        "text": `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      }
    ]
  },
  {
    "id": `DbBpzs`,
    "title": `Рок — это протест`,
    "announce": `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Из под его пера вышло 8 платиновых альбомов. Собрать камни бесконечности легко, если вы прирожденный герой. Он написал больше 30 хитов.`,
    "fullText": `Первая большая ёлка была установлена только в 1938 году. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Простые ежедневные упражнения помогут достичь успеха. Как начать действовать? Для начала просто соберитесь. Он написал больше 30 хитов. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Это один из лучших рок-музыкантов.`,
    "createdDate": `2021-12-19 21:19:50`,
    "category": [
      `Разное`,
      `Программирование`,
      `За жизнь`,
      `Железо`,
      `IT`,
      `Кино`,
      `Деревья`,
      `Без рамки`
    ],
    "comments": [
      {
        "id": `BEzPlI`,
        "text": `Это где ж такие красоты? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Мне кажется или я уже читал это где-то?`
      }
    ]
  },
  {
    "id": `HfeHxQ`,
    "title": `Самый лучший музыкальный альбом этого года`,
    "announce": `Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
    "fullText": `Достичь успеха помогут ежедневные повторения. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Программировать не настолько сложно, как об этом говорят. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Золотое сечение — соотношение двух величин, гармоническая пропорция. Ёлки — это не просто красивое дерево. Это прочная древесина. Как начать действовать? Для начала просто соберитесь. Он написал больше 30 хитов. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Это один из лучших рок-музыкантов. Собрать камни бесконечности легко, если вы прирожденный герой. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Из под его пера вышло 8 платиновых альбомов. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
    "createdDate": `2021-12-13 19:37:23`,
    "category": [
      `За жизнь`,
      `Деревья`,
      `Музыка`,
      `Кино`,
      `Железо`
    ],
    "comments": [
      {
        "id": `C_C2vs`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Планируете записать видосик на эту тему? Это где ж такие красоты? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      }
    ]
  },
  {
    "id": `ukdgdG`,
    "title": `Как достигнуть успеха не вставая с кресла`,
    "announce": `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
    "fullText": `Простые ежедневные упражнения помогут достичь успеха. Первая большая ёлка была установлена только в 1938 году. Золотое сечение — соотношение двух величин, гармоническая пропорция. Ёлки — это не просто красивое дерево. Это прочная древесина. Из под его пера вышло 8 платиновых альбомов. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
    "createdDate": `2021-12-11 17:31:20`,
    "category": [
      `Музыка`,
      `Без рамки`,
      `IT`,
      `Программирование`,
      `Разное`
    ],
    "comments": [
      {
        "id": `GAKLC0`,
        "text": `Плюсую, но слишком много буквы! Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      },
      {
        "id": `tS4vzp`,
        "text": `Планируете записать видосик на эту тему? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Мне кажется или я уже читал это где-то?`
      }
    ]
  },
  {
    "id": `K9pKlg`,
    "title": `Обзор новейшего смартфона`,
    "announce": `Золотое сечение — соотношение двух величин, гармоническая пропорция. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Он написал больше 30 хитов.`,
    "fullText": `Из под его пера вышло 8 платиновых альбомов. Первая большая ёлка была установлена только в 1938 году. Программировать не настолько сложно, как об этом говорят. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Собрать камни бесконечности легко, если вы прирожденный герой. Как начать действовать? Для начала просто соберитесь. Ёлки — это не просто красивое дерево. Это прочная древесина.`,
    "createdDate": `2021-11-29 05:14:54`,
    "category": [
      `Деревья`,
      `Музыка`,
      `За жизнь`,
      `Железо`,
      `Без рамки`,
      `Разное`,
      `IT`,
      `Программирование`
    ],
    "comments": [
      {
        "id": `7635I1`,
        "text": `Согласен с автором! Совсем немного...`
      },
      {
        "id": `KjwtHm`,
        "text": `Мне кажется или я уже читал это где-то?`
      },
      {
        "id": `HS0KkM`,
        "text": `Плюсую, но слишком много буквы! Планируете записать видосик на эту тему? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Совсем немного...`
      },
      {
        "id": `6IWdmC`,
        "text": `Согласен с автором!`
      }
    ]
  },
  {
    "id": `2JOW6U`,
    "title": `Как перестать беспокоиться и начать жить`,
    "announce": `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Это один из лучших рок-музыкантов. Как начать действовать? Для начала просто соберитесь. Из под его пера вышло 8 платиновых альбомов.`,
    "fullText": `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Ёлки — это не просто красивое дерево. Это прочная древесина. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Простые ежедневные упражнения помогут достичь успеха.`,
    "createdDate": `2021-12-04 00:22:30`,
    "category": [
      `Кино`,
      `Разное`,
      `Музыка`,
      `За жизнь`,
      `Железо`
    ],
    "comments": [
      {
        "id": `oUS47p`,
        "text": `Хочу такую же футболку :-) Плюсую, но слишком много буквы! Планируете записать видосик на эту тему?`
      },
      {
        "id": `jwyhSu`,
        "text": `Согласен с автором! Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      }
    ]
  },
  {
    "id": `l8tmwH`,
    "title": `Что такое золотое сечение`,
    "announce": `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Золотое сечение — соотношение двух величин, гармоническая пропорция. Простые ежедневные упражнения помогут достичь успеха. Достичь успеха помогут ежедневные повторения.`,
    "fullText": `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
    "createdDate": `2022-01-25 14:26:59`,
    "category": [
      `Программирование`,
      `Деревья`,
      `За жизнь`,
      `Кино`,
      `IT`
    ],
    "comments": [
      {
        "id": `7B9lhD`,
        "text": `Плюсую, но слишком много буквы! Хочу такую же футболку :-)`
      }
    ]
  }
];


module.exports = {
  Env,
  ExitCode,
  HttpCode,
  mockData,
  ANNOUNCE_LENGTH,
  API_PREFIX,
  DEFAULT_COMMAND,
  DEFAULT_COUNT,
  DEFAULT_PORT,
  DEFAULT_FRONT_PORT,
  FILE_NAME,
  FILE_PATH,
  FILE_CATEGORIES_PATH,
  FILE_COMMENTS_PATH,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  MAX_CATEGORIES,
  MAX_COUNT,
  MAX_COMMENTS,
  MAX_COMMENTS_SENTENCES,
  MAX_ID_LENGTH,
  MONTH_RANGE,
  PUBLIC_DIR,
  UPLOAD_DIR,
  USER_ARGV_INDEX,
};

