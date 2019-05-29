import React, {PureComponent} from "react";
import WelcomeScreen from "./../welcome-screen/welcome-screen";
import GameArtist from "./../game-artist/game-artist";
import GameGenre from "./../game-genre/game-genre";
import PropTypes from "prop-types";
import questions from "../../mocks/questions";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    if (this.state.question === -1) {
      return <WelcomeScreen
        errorCount={this.props.errorCount}
        time={this.props.gameTime}
        onStartButtonClick={() => {
          this.setState({
            question: this.state.question + 1,
          });
        }}
      />;
    } else if (this.state.question === 0) {
      return <GameGenre
        data={questions.QUESTIONS[0]}
        onSetAnswer={() =>
          this.setState({
            question: this.state.question + 1,
          })
        }
      />;
    } else if (this.state.question === 1) {
      return <GameArtist
        data={questions.QUESTIONS[1]}
        onSetAnswer={() =>
          this.setState({
            question: this.state.question + 1,
          })
        }
      />;
    }
    return 1;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
