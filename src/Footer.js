import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        © {this.props.year} React JS
      </div>
    );
  }
}

export default Footer;