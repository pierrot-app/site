import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Intro from './../../components/Intro/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Intro />, div);
});
