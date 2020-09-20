import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from './store/store'
import { ActivityPage } from './frontEnd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/activity" component={ActivityPage}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
