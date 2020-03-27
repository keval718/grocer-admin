import React, { Component } from 'react';
import './App.css';
import TopNav from './Nav';
import MainArea from './MainArea';
import AddToCart from './components/AddToCart';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
          <Route path="/Home" component={TopNav}></Route>
          <Route path="/Home" component={MainArea}></Route>
          <Route path="/addToCart" component={AddToCart}></Route>
          </div>
        </Router>
        
    
    );
  }
}

export default App;
