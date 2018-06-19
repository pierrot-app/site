import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AlloHome from './../../views/Allo/Home/';
import PierrotHome from './../../views/Pierrot/Home/';

it('renders without crashing', () => {
  const allo = document.createElement('div');
  ReactDOM.render(<AlloHome />, allo);
  const pierrot = document.createElement('div');
  ReactDOM.render(<PierrotHome />, pierrot);
});
