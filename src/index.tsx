import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './workers/registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';

import Home from './views/Home/';
import AlloHome from './views/Allo/Home/';

// TODO ADD react-router if necessary
ReactDOM.render((
  <Router>
    <div>
      <Route exact={true} path="/" component={AlloHome} />
      <Route path="/pierrot" component={Home} />
    </div>
  </Router>
  ),
                document.getElementById('root') as HTMLElement
);
registerServiceWorker();
