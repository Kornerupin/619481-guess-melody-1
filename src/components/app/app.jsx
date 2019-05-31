import React, {PureComponent} from "react";
import WelcomeScreen from "./../welcome-screen/welcome-screen";
import GameArtist from "./../game-artist/game-artist";
import GameGenre from "./../game-genre/game-genre";
import PropTypes from "prop-types";

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
        data={props.questions[question]}
        onSetAnswer={onUpdate}
      />;
    } else if (question === 1) {
      return <GameArtist
        data={props.questions[question]}
        onSetAnswer={onUpdate}
      />;
    }
    return <WelcomeScreen
      errorCount={props.errorCount}
      time={props.gameTime}
      onStartButtonClick={onUpdate}
    />;
  }

  render() {
    // const errorCount = this.props.errorCount;
    // const gameTime = this.props.gameTime;
    // const questions = this.props.questions;
    const question = this.state.question;

    return App.getScreen(question, this.props, (result = false) => {
      this.setState({
        question: (question < 1) ? question + 1 : -1,
      });

      console.log(result);
      console.log(question);
    });
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
