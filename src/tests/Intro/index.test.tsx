import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Intro from './../../containers/Intro/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Intro />, div);
});
