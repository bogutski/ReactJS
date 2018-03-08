import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function yearNow(){
let today = new Date();
  return today.getFullYear();
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header siteName="REACT"/>
        <Content />
        <Footer year = {yearNow()}/>

      </div>
    );
  }
}

export default App;
