import React, {PureComponent} from "react";
import WelcomeScreen from "./../welcome-screen/welcome-screen";
import GameArtist from "./../game-artist/game-artist";
import GameGenre from "./../game-genre/game-genre";
import PropTypes from "prop-types";
import Questions from "../../mocks/questions";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  static getScreen(question, props, onUpdate) {
    if (question === -1) {
      const errorCount = props.errorCount;
      const gameTime = props.gameTime;

      return <WelcomeScreen
        errorCount={errorCount}
        time={gameTime}
        onStartButtonClick={onUpdate}
      />;
    } else if (question === 0) {
      return <GameGenre
        data={Questions.QUESTIONS[question]}
        onSetAnswer={onUpdate}
      />;
    } else if (question === 1) {
      return <GameArtist
        data={Questions.QUESTIONS[question]}
        onSetAnswer={onUpdate}
      />;
    }
    return `Error - incorrect screen id`;
  }

  render() {
    // const errorCount = this.props.errorCount;
    // const gameTime = this.props.gameTime;
    // const questions = this.props.questions;
    const question = this.state.question;

    return App.getScreen(question, this.props, () => {
      this.setState({
        question: question + 1,
      });
    });
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
