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

        <button onClick={() =>
          this.setState(
            {open: !this.state.open,
              cnt: this.state.cnt +1
            }
            )}>
          Show/Hide content
        </button>
        <p>Button clicks: {this.state.cnt}</p>

        {this.state.open ?
          <Content /> :
          <p>No Content</p>
        }


        <div className="container-fluid">
          <Footer
            year={yearNow()}
            authorName="Arthur Senko"
          />
        </div>

      </div>
    );
  }
}

export default App;
