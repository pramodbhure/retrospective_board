import React from 'react';
import Header from './components/header';
import Board from './containers/board';
import './App.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducer';

const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Board />
      </div>
    </Provider>
  );
}

export default App;
