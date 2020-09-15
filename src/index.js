import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// we are passing our reducer into the createStore function. That means the store constant is a Redux store that knows how to handle the actions we've defined in our reducer.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() =>
  console.log(store.getState())
);
//Remember the subscribe() method that Redux provides? Generally, we won't use Redux's subscribe() or getState() in our "production" code, but it's excellent for testing. This is a great way to keep an eye on the current state of the store.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
