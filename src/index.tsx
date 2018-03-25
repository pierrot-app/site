import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './workers/registerServiceWorker';
import './index.scss';

import Home from './views/Home/';

// TODO ADD react-router if necessary
ReactDOM.render(
  <Home/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
