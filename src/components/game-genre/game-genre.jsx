import React from "react";
import PropTypes from "prop-types";

class GameGenre extends React.PureComponent {
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

    this.getUserAnswer = this.getUserAnswer.bind(this);
  }

  getUserAnswer(evt) {
    // Записываем новое состояние чекбокса в объект.
    const temp = Object.assign({}, this.state.result);
    temp[evt.currentTarget.getAttribute(`id`)] = evt.currentTarget.checked;

    this.setState({
      result: Object.assign({}, temp),
    });
  }

  render() {
    const data = this.props.data;
    const onSetAnswer = this.props.onSetAnswer;

    const tracs = data.answers.map((answer, key) =>
      <div className="track" key={key}>
        <button className="track__button track__button--pause" type="button"></button>
        <div className="track__status">
          <audio src={answer.src}></audio>
        </div>
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" onClick={this.getUserAnswer} value={`answer-` + (key + 1)} id={`answer-` + (key + 1)} />
          <label className="game__check" htmlFor={`answer-` + (key + 1)}>Отметить</label>
        </div>
      </div>
    );

    return <section className="game game--genre">
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
        <h2 className="game__title">Выберите {data.genre} треки</h2>
        <form className="game__tracks" onSubmit={() => onSetAnswer(this.state.result)}>

          {tracs}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

GameGenre.propTypes = {
  data: PropTypes.object.isRequired,
  onSetAnswer: PropTypes.func.isRequired,
};

export default GameGenre;
