import React, { Component } from 'react';
import MyHeader from './components/header'; 
import Logo from './components/toplogo'

import './app.css'

class App extends Component { 
  render() {
    return (
      <div className="wrapper"> 
        <Logo />
        <MyHeader />
        
      </div>
    );
  }
}

export default App;
