import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app";
import MOCK from "./mocks/questions";

const init = (mock) => {

  ReactDOM.render(
      <App
        errorCount = {mock.SETTINGS.errorCount}
        gameTime = {mock.SETTINGS.gameTime}
        questions = {mock.QUESTIONS}
      />,
      document.querySelector(`.main`)
  );

};

init(MOCK);
