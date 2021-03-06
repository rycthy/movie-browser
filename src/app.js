import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Main from './components/Main';
import { startSetTrending } from './actions/search';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Main />
  </Provider>
);
store.dispatch(startSetTrending()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});