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

    this.state = {
      open: true,
    }
  }

  render() {


    return (
      <div className="App">
        <Header/>

        <button type="button" className="btn btn-primary btn-lg mb-2 mt-2" onClick={() => {
          this.setState({
            open: !this.state.open
          })

          }
        }>
          REFRESH THE LIST
        </button>

        {this.state.open ? <Content /> : <div><p className="h5">REFRESHING...</p>
          <p className="h5">Click the button one more time</p></div>}

        <Footer
          year={yearNow()}
          authorName="Arthur Senko"
        />

      </div>
    );
  }
}

export default App;
