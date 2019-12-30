import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Topics from './containers/topics';
import Board from './containers/board';
import AddRecord from './containers/addRecord';
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
        <BrowserRouter>
        	<Switch>
        		<Route exact path='/' component={Topics} />
        		<Route exact path='/retrospective-board' component={Board} />
        		<Route exact path='/add-record' component={AddRecord} />
        	</Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
