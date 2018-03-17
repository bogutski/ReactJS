import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron p-2 mb-3 pt-4">
          {this.props.sName.map(el =>
            <p key={el.link}><a href={el.link}>{el.name}</a></p>
          )
          }
        </div>
      </div>
    );
  }
}

export default Header;