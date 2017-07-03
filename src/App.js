import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';

import {  BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import TicTacToe from "./components/TicTacToe";
import SideBar from "./components/SideBar";
import UserSettings from "./components/UserSettings";
import Lobby from "./components/Lobby";
import ToDo from "./components/ToDo";

const store = createStore(allReducers,{})


class App extends Component {
  render() {
    return ( 
<Provider store={store}>
  <Router>
    <SideBar>
    <Switch>
      <Route exact path="/" component={TicTacToe}/>
      <Route path="/Lobby" component={Lobby}/>
      <Route path="/UserSettings" component={UserSettings}/>
      <Route path="/TicTacToe" component={TicTacToe}/>
       <Route path="/ToDo" component={ToDo}/>
      </Switch>
    </SideBar>
  </Router>
</Provider>
  );
  }
}

export default App;
