import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Save view`, () => {
  const clickHandler = () => {};
  const tree = renderer
  .create(
      <WelcomeScreen
        time={5}
        errorCount={3}
        onclick={clickHandler}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
