import React from 'react';

class Footer extends React.Component {
  // not arrow function
  handleMouseOver() {
    // logs 'mouseover'
    console.log('mouseover');
  }

  render() {
    return (
      // why 'this' is not window when this event fires?
      <footer onMouseOver={this.handleMouseOver}>
        <p>Created at Juno</p>
      </footer>
    );
  }
}

export default Footer;
