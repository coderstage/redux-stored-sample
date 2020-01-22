import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

/**
 * The store and containers
 */
import Store from './Redux/Store';
import Containers from './Redux/Containers';

/**
 * Containers or the
 * screens registered earlier
 */
const {Products} = Containers;


/**
 * Main App
 */
const App = () => (
  <Provider store={Store}>
    <Router>
      <div id="app">
        <Switch>
          <Route path="/" exact component={Products} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
