import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './workers/registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';

import Home from './views/Pierrot/Home/';
import AlloHome from './views/Allo/Home/';
import About from './views/Allo/About/';

ReactDOM.render((
  <Router>
    <div>
      {/* <Route path="**" component={AlloHome} /> */}
      <Route exact={true} path={process.env.PUBLIC_URL + '/'} component={AlloHome} />
      <Route path={process.env.PUBLIC_URL + '/pierrot'} component={Home} />
      <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
    </div>
  </Router>
  ),
                document.getElementById('root') as HTMLElement
);
registerServiceWorker();
