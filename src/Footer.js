import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        © {this.props.year} ReactJS by {this.props.authorName}
      </div>
    );
  }
}

export default Footer;