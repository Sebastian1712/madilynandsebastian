import React from 'react';
import './App.css';
import Home from '../pages/Home/Home.js';
import Adventure from '../pages/Adventures/Adventure.js';
import Nav from '../components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/adventures" component = {Adventure} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;