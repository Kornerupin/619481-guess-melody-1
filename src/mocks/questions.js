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


const GenreQuestionScreen = ({question, onAnswer}) => {
  const {
    answers,
    genre,
  } = question;

  return <section className="game__screen">
    <h2 className="game__title">Выберите {genre} треки</h2>
    <form className="game__tracks" onSubmit={(evt) => {
      evt.preventDefault();
      onAnswer();
    }}>
      {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
        <button className="track__button track__button--play" type="button"/>
        <div className="track__status">
          <audio />
        </div>
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
          <label className="game__check" htmlFor={`answer-${i}`}>
            Отметить
          </label>
        </div>
      </div>)}
      <button className="game__submit button" type="submit">Ответить</button>
    </form>
  </section>;
};






