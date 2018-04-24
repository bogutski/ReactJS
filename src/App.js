// eslint-disable-next-line
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function yearNow() {
  let today = new Date();
  return today.getFullYear();
}

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer
          year={yearNow()}
          authorName="Arthur Senko"
        />
      </div>
    );
  }
}

export default App;
