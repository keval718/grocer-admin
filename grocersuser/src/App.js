import React, { Component } from 'react';
import './App.css';
import TopNav from './Nav';
import MainArea from './MainArea';
import AddToCart from './components/AddToCart';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/login'
class App extends Component {
  render() {
    return (
      <Router>
        
      <div className="App">
          
          <Route path="/Home" component={TopNav}></Route>
          <Route path="/Home" component={MainArea}></Route>
          <Route path="/addToCart" component={AddToCart}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          </div>
          
        </Router>
        
    
    );
  }
}

export default App;
