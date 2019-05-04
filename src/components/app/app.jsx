import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const App = (props) => {
  App.PropTypes = {
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired,
  };

  return <WelcomeScreen
    errorCount = {props.errorCount}
    time = {props.gameTime}
  />;
};

export default App;
