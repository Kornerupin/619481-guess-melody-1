import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`Save view`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(
        <App
          gameTime={5}
          errorCount={3}
          onclick={clickHandler}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
