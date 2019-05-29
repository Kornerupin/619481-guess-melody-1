const SETTINGS = {
  gameTime: 5,
  errorCount: 3
};

const QUESTIONS = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
      {
        genre: `jazz`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
      {
        genre: `jazz`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
      {
        genre: `pop`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
    ]
  },
  {
    type: `artist`,
    name: `ABBA`,
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
    artists: [
      {
        name: `ABBA`,
        img: `http://placehold.it/134x134`,
      },
      {
        name: `Кино`,
        img: `http://placehold.it/134x134`,
      },
      {
        name: `Mireille Mathieu`,
        img: `http://placehold.it/134x134`,
      },
      {
        name: `Секрет`,
        img: `http://placehold.it/134x134`,
      },
    ]
  }
];

export default {SETTINGS, QUESTIONS};
