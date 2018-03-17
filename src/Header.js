import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.sName.map(el =>
          <p><a href={el.link} id={el.link}>{el.name}</a></p>
        )
        }
      </div>
    );
  }
}

export default Header;