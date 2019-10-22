import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '@/App';
import configureStore from '@/services/store';
const store = configureStore();

export function routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
