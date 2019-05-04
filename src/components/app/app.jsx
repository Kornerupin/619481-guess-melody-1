import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const App = (props) => {

  return <WelcomeScreen
    errorCount = {props.errorCount}
    time = {props.gameTime}
    onclick={props.onclick}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onclick: PropTypes.func,
};

export default App;
