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
      cnt: 0,
    }
  }

  render() {
    const sn = [{
      link: 'https://artsenius.github.io/ReactJS',
      name: 'This website on GitHub Pages',
    },
      {
        link: 'https://github.com/artsenius',
        name: 'My GitHub',
      }
    ];
    return (
      <div className="App">
        <Header sName={sn}/>

        <button type="button" class="btn btn-primary btn-lg" onClick={() =>
          this.setState(
            {
              open: !this.state.open,
              cnt: this.state.cnt + 1
            }
          )}>
          {this.state.open ?
            'REFRESH AND HIDE' :
            'SHOW'}
        </button>
        <p className="p-3 mb-0"><h5>Button clicks counter: {this.state.cnt}</h5></p>

        {this.state.open ?
          <Content /> :
          <p className="h5 mb-3 jumbotron p-3">TO DO LIST HIDDEN</p>
        }

        <Footer
          year={yearNow()}
          authorName="Arthur Senko"
        />

      </div>
    );
  }
}

export default App;
