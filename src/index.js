import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';

//Allow middleware and debug to be applied to createStore
const boundCompose = compose.bind(null, applyMiddleware());
//Store brings Redux into the application
const store = createStore(
  reducers,
  //adds redux debug tool
  window.__REDUX_DEVTOOLS_EXTENSION__ ? boundCompose(window.__REDUX_DEVTOOLS_EXTENSION__()) : boundCompose()
);
//We get Provider from React-Redux which is an element dropin so that everything checks in with the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

