import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="mb-0 d-block p-2 bg-dark text-white">
        © {this.props.year} ReactJS To Do List by {this.props.authorName}
      </div>
    );
  }
}

export default Footer;