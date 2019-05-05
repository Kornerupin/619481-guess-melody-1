import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const App = (props) => {
  const clickHandler = jest.fn();

  return <WelcomeScreen
    errorCount = {props.errorCount}
    time = {props.gameTime}
    onclick={clickHandler}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default App;
