import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron p-2 mb-3 pt-4">
          {this.props.sName.map(el =>
            <p><a href={el.link} id={el.link}>{el.name}</a></p>
          )
          }
        </div>
      </div>
    );
  }
}

export default Header;