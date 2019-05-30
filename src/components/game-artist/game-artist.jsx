import React from "react";
import PropTypes from "prop-types";

class GameArtist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {
        'answer-1': false,
        'answer-2': false,
        'answer-3': false,
        'answer-4': false,
      },
    };

    this.setUserAnswer = this.setUserAnswer.bind(this);
  }

  setUserAnswer(evt) {
    this.setState({
      result: {
        [evt.currentTarget.id]: evt.currentTarget.checked
      },
    });
    this.props.onSetAnswer(this.state.result);
  }

  render() {
    const data = this.props.data;

    const artists = data.artists.map((artist, key) =>
      <div className="artist" key={key}>
        <input className="artist__input visually-hidden" onChange={this.setUserAnswer}
          type="radio" name="answer" value={`artist-` + (key + 1)} id={`answer-` + (key + 1)} />
        <label className="artist__name" htmlFor={`answer-` + (key + 1)}>
          <img className="artist__picture" src={artist.img} alt={artist.name} />
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
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`,
            }}/>
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

        <form className="game__artist">

          {artists}

        </form>
      </section>
    </section>;
  }
}

// const getUserAnswer = (evt) => {
//   result[evt.currentTarget.getAttribute(`id`)] = evt.currentTarget.checked;
//   onSetAnswer(result);
// };

GameArtist.propTypes = {
  data: PropTypes.object.isRequired,
  onSetAnswer: PropTypes.func.isRequired,
};

export default GameArtist;
