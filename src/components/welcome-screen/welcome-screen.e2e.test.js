import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

it(`Testing button click`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <WelcomeScreen
        time={5}
        errorCount={3}
        onclick={clickHandler}
      />
  );

  const welcomeButton = app.find(`.welcome__button`);
  welcomeButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
