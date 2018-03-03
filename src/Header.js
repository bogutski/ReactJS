import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.siteName}
      </div>
    );
  }
}

export default Header;