import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app";

const init = () => {
  const settings = {
    errorCount: 3,
    gameTime: 5
  };

  ReactDOM.render(
      <App
        errorCount = {settings.errorCount}
        gameTime = {settings.gameTime}
      />,
      document.querySelector(`.main`)
  );

};

init();
