import React from 'react';
import Header from './components/header';
import Topics from './containers/topics';
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
        <Topics />
      </div>
    </Provider>
  );
}

export default App;
