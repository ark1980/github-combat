import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Battle from './components/Battle';
import Popular from './components/Popular';
import NotMatch from './components/NotMatch';
import Result from './components/Result';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />  
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/battle" component={Battle}/>
          <Route path="/battle/result" component={Result}/>
          <Route path="/popular" component={Popular}/>
          <Route component={NotMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
