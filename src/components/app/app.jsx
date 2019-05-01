import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";

const App = (props) => {
  const {errorCount, gameTime} = props;

  return <WelcomeScreen
    errorCount = {errorCount}
    time = {gameTime}
  />;
};

export default App;
