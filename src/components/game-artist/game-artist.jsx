import React from "react";
import PropTypes from "prop-types";

const GameArtist = (props) => {
  const data = props.data;
  const onSetAnswer = props.onSetAnswer;

  const artists = data.artists.map((artist, key) =>
    <div className="artist" key={key}>
      <input className="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id={`answer-` + (key + 1)} />
      <label className="artist__name" htmlFor={`answer-` + (key + 1)}>
        <img className="artist__picture" src={artist.img} alt={artist.name} />EE
        {artist.name}
      </label>
    </div>
  );

  return <section className="game game--artist">
    <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370"
          style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
      </svg>

      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">05</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">00</span>
      </div>

      <div className="game__mistakes">
        <div className="wrong"></div>
        <div className="wrong"></div>
        <div className="wrong"></div>
      </div>
    </header>

    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <button className="track__button track__button--play" type="button"></button>
        <audio src={data.src}></audio>
      </div>

      <form className="game__artist" onSubmit={() => onSetAnswer()}>

        {artists}

      </form>
    </section>
  </section>;
};

GameArtist.propTypes = {
  data: PropTypes.object.isRequired,
  onSetAnswer: PropTypes.func.isRequired,
};

export default {GameArtist};
