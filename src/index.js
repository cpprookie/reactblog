import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import blogApp from './reducer'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(blogApp)

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  ), 
  document.getElementById('root'));
registerServiceWorker();
