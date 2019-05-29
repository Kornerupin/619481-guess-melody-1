import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app";
import MOCK from "./mocks/questions";

const init = () => {

  ReactDOM.render(
      <App
        errorCount = {MOCK.SETTINGS.errorCount}
        gameTime = {MOCK.SETTINGS.gameTime}
        questions = {MOCK.QUESTIONS}
      />,
      document.querySelector(`.main`)
  );

};

init();
