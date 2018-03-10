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
      open: false,
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

        <button onClick={() =>
          this.setState(
            {open: !this.state.open,
              cnt: this.state.cnt +1
            }
            )}>
          Show/Hide content
        </button>

        {this.state.open ?
          <Content /> :
          <p>No Content</p>
        }
        <p>Button clicks: {this.state.cnt}</p>
        <div className="footer">
          <Footer year={yearNow()}/>
        </div>

      </div>
    );
  }
}

export default App;
