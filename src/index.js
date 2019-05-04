import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app";

const init = () => {
  const SETTINGS = {
    gameTime: 5,
    errorCount: 3
  };

  ReactDOM.render(
      <App
        errorCount = {SETTINGS.errorCount}
        gameTime = {SETTINGS.gameTime}
      />,
      document.querySelector(`.main`)
  );

};

init();
